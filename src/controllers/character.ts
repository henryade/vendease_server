import { Request, Response } from "express";
import { CharacterService, EpisodeCharactersService, EpisodeService } from "../services";

const ALLOWED_FILTERS = ['gender', 'status', 'location']

class CharacterController {
  static async get(request: Request, response: Response) {
    try {
      const data = await CharacterService.get(request.body);
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  static async getAll(request: Request, response: Response) {
    try {
      let where = {};
      if(Object.values(request.query)) {
        where = Object.keys(request.query).reduce((acc:any, next: string) => {
          if(ALLOWED_FILTERS.includes(next.toLowerCase())) {
            acc[next] = request.query[next];
          }
          return acc;
        }, {})
      }
      const data = await CharacterService.getAll({ where });
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  static async post(request: Request, response: Response) {
    try {
      const { episode_id } = request.body;
      if (episode_id) {
        const data = await EpisodeService.getByPk(request.body.episode_id);
        if(!data) {
          return response.status(404).json({ error: 'episode_id does not exist' });
        }
      }
      const data = await CharacterService.add(request.body);
      if (episode_id) await EpisodeCharactersService.add({ episode_id, character_id: data.id })
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}

export default CharacterController;
