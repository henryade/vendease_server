import { IEpisode } from "../interfaces";
import { Episodes } from "../models";

class EpisodeService {
  static async add(data: IEpisode) {
    const newEpisode = await Episodes.create({ ...data });
    return newEpisode;
  }
  static async get(where: { [x: string]: string }) {
    const episode = await Episodes.scope("full").findOne({ where });
    return episode;
  }
  static async getByPk(primary_key: number) {
    const episode = await Episodes.findByPk(primary_key);
    return episode;
  }
  static async getAll(filter?: any) {
    const episodes = await Episodes.scope("full").findAll(filter);
    return episodes;
  }
}

export default EpisodeService;
