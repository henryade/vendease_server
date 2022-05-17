import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
  Scopes,
} from "sequelize-typescript";
import EpisodeCharacters from "./episodeCharacters";
import Episodes from "./episodes";

@Scopes(() => ({
  full: {
    include: [
      {
        model: Episodes,
        through: {attributes: []},
      },
    ],
  },
}))
@Table({
  timestamps: true,
  underscored: true,
  tableName: "characters",
})
class Characters extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.ENUM,
    values: ["active", "dead", "unknown"],
    allowNull: false,
  })
  status!: string;

  @Column(DataType.STRING)
  state_of_origin!: string;

  @Column({
    type: DataType.ENUM,
    values: ["male", "female"],
    allowNull: false,
  })
  gender!: string;

  @Column(DataType.STRING)
  location!: string;

  @BelongsToMany(() => Episodes, () => EpisodeCharacters)
  episodes!: Array<Episodes & {EpisodeCharacters: EpisodeCharacters}>;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}

export default Characters;