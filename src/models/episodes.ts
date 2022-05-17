import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  UpdatedAt,
  CreatedAt,
  BelongsToMany,
  Scopes,
} from "sequelize-typescript";
import Characters from "./characters";
import Comments from "./comments";
import EpisodeCharacters from "./episodeCharacters";

@Scopes(() => ({
  charcater: {
    include: [Characters],
  },
  comment: {
    include: [
      {
        model: Comments,
      },
    ],
  },
  full: {
    include: [
      {
        model: Comments,
        order: [['created_at', 'DESC']]
      },
      {
        model: Characters,
        order: [['name', 'ASC'], ['gender', 'ASC']]
      },
    ],
    order:[['release_date', 'ASC']],
  },
}))
@Table({
  timestamps: true,
  underscored: true,
  tableName: "episodes",
})
class Episodes extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  release_date!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  episode_code!: string;

  @BelongsToMany(() => Characters, () => EpisodeCharacters)
  characters!: Characters[];

  @HasMany(() => Comments)
  episode_comments!: Comments[];

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}

export default Episodes;