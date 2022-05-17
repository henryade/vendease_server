import { IEpisodeCharacter } from "../interfaces";
import { EpisodeCharacters } from "../models";

class EpisodeCharactersService {
  static async add(data: IEpisodeCharacter) {
    const newEpisodeCharacter = await EpisodeCharacters.create({ ...data });
    return newEpisodeCharacter;
  }
  static async get(where: { [x: string]: string }) {
    const episodeCharacter = await EpisodeCharacters.scope("full").findOne({ where });
    return episodeCharacter;
  }
  static async getByPk(primary_key: number) {
    const episodeCharacter = await EpisodeCharacters.findByPk(primary_key);
    return episodeCharacter;
  }
  static async getAll() {
    const episodeCharacters = await EpisodeCharacters.scope("full").findAll();
    return episodeCharacters;
  }
}

export default EpisodeCharactersService;
