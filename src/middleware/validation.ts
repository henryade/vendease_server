import { NextFunction, Request, Response } from "express";
import * as validations from "../validations";

const Validation = (validator: string) => {
  const Validators: any = Object.assign({}, validations);

  //! If validator is not exist, throw err
  if (!Object.prototype.hasOwnProperty.call(Validators, validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async function (
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const validated = await Validators[validator].validateAsync(request.body);
      request.body = validated;
      next();
    } catch (err: any) {
      if (err.isJoi) {
        return response.status(422).json({
          error: err.message,
        });
      }
    }
  };
};

export default Validation;
