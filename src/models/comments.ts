import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";
import Episodes from "./episodes";

@Table({
  timestamps: true,
  underscored: true,
  tableName: "comments",
})
export class Comments extends Model {
  @Column({
    type: DataType.STRING(250),
    allowNull: false,
  })
  comments!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ip_address_location!: string;

  @ForeignKey(() => Episodes)
  @Column
  episode_id!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}

export default Comments;
