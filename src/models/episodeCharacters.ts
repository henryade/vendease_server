import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import Characters from "./characters";
import Episodes from "./episodes";

@Table
class EpisodeCharacters extends Model {
  @ForeignKey(() => Episodes)
  @Column
  episode_id!: number;

  @ForeignKey(() => Characters)
  @Column
  character_id!: number;
}

export default EpisodeCharacters;

