import { IComment } from "../interfaces";
import { Comments } from "../models";

class CommentService {
  static async add(data: IComment) {
    const newComment = await Comments.create({ ...data });
    return newComment;
  }
  static async get(where: { [x: string]: string }) {
    const newComment = await Comments.findOne({ where });
    return newComment;
  }
  static async getAll() {
    const newComment = await Comments.findAll();
    return newComment;
  }
}

export default CommentService;
