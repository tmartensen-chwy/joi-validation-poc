import * as Joi from 'joi';

export const FOO_SCHEMA = Joi.object({
  id: Joi.string().guid(),
  foo: Joi.string().required(),
  bar: Joi.string().required(),
  version: Joi.number(),
});

export const FOO_SCHEMA_PATCH = FOO_SCHEMA.fork(['foo', 'bar'], schema =>
  schema.optional(),
);
