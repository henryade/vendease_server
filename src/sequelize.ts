import { Sequelize } from "sequelize-typescript";
import { Comments, Episodes, Characters, EpisodeCharacters } from "./models";

let url = "";

switch(process.env.NODE_ENV) {
  case 'test': 
    url = process.env.POSTGRES_URL_TEST || "";
    break;
  default: 
    url = process.env.POSTGRES_URL || "";
}

const sequelize = new Sequelize(url);
sequelize.addModels([Comments, Characters, Episodes, EpisodeCharacters])

export default sequelize;
