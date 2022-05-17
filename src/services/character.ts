import { ICharacter } from "../interfaces";
import { Characters, Episodes } from "../models";

class CharacterService {
  static async add(data: ICharacter) {
    const newCharacter = await Characters.create({ ...data });
    return newCharacter;
  }
  static async get(where: { [x: string]: string }) {
    const newCharacter = await Characters.scope("full").findOne({ where });
    return newCharacter;
  }
  static async getByPk(primary_key: number) {
    const episode = await Characters.findByPk(primary_key);
    return episode;
  }
  static async getAll(filter?: {where: {[x:string] : string}}) {
    const newCharacter = await Characters.scope("full").findAll(filter);
    return newCharacter;
  }
}

export default CharacterService;
