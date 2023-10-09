import * as Joi from 'joi';
export const JoiValidation = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(3000),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
});