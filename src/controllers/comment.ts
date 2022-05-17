import { Request, Response } from "express";
import { CommentService, EpisodeService } from "../services";

class CommentController {
  static async get(request: Request, response: Response) {
    try {
      const data = await CommentService.get(request.body);
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  static async getAll(request: Request, response: Response) {
    try {
      const data = await CommentService.getAll();
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
          return response.status(404).json({ error: 'episode id does not exist' });
        }
      }
      const data = await CommentService.add(request.body);
      return response.status(200).json({ message: "success", data });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}

export default CommentController;
