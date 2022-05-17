import * as Joi from "joi";
import { Gender, Status } from "../interfaces";

const characterSchema = Joi.object({
  first_name: Joi.string().min(2).max(30).required(),
  last_name: Joi.string().min(2).max(30).required(),
  status: Joi.string()
    .valid(Status.ACTIVE, Status.DEAD, Status.UNKNOWN)
    .required(),
  gender: Joi.string().valid(Gender.FEMALE, Gender.MALE).required().required(),
  location: Joi.string().optional(),
  state_of_origin: Joi.string().optional(),
  episode_id: Joi.number().optional()
});

export default characterSchema;
