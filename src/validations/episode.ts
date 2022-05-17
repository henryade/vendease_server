import * as Joi from "joi";
import characterSchema from "./character";
import commentSchema from "./comment";

const episodeSchema = Joi.object({
  name: Joi.string().required(),
  release_date: Joi.string().required(),
  episode_code: Joi.string().required(),
  character_id: Joi.number().optional(),
  episode_comments_id: Joi.number().optional(),
});

export default episodeSchema;
