import { Request, Response } from "express";
import { Op } from "sequelize";
import { Characters } from "../models";
import { CharacterService, EpisodeCharactersService, EpisodeService } from "../services";

const SEARCHABLE_FIELDS = ['first_name', 'last_name']

class EpisodeController {
  static async get(request: Request, response: Response) {
    try {
      const data = await EpisodeService.get(request.body);
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  static async getAll(request: Request, response: Response) {
    try {
    let include: any[] = [];
      if(Object.values(request.query).length) {
        include = [{
          model: Characters,
          where: {
              [Op.or]: SEARCHABLE_FIELDS.map((data: string) => ({
              [data]: {[Op.eq]: request.query.search}
            }))
          },
          required: true
      }]
    }
      console.log(include);
    
      const data = await EpisodeService.getAll({ include });
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  static async post(request: Request, response: Response) {
    try {
      const { character_id } = request.body;

      if (character_id) {
        const data = await CharacterService.getByPk(request.body.character_id);
        if(!data) {
          return response.status(404).json({ error: 'character id does not exist' });
        }
      }
      const data = await EpisodeService.add(request.body);
      if(character_id) await EpisodeCharactersService.add({ episode_id: data.id, character_id })
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}

export default EpisodeController;
