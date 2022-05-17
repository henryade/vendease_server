import * as Joi from "joi";

const commentSchema = Joi.object({
  comments: Joi.string().min(1).max(250).required(),
  ip_address_location: Joi.string().required(),
  episode_id: Joi.number().required(),
});

export default commentSchema;
