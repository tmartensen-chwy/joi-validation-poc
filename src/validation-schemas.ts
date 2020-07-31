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

export const BAR_SCHEMA = Joi.object({
  id: Joi.string().guid(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  bar: Joi.string()
})

export const BAR_SCHEMA_PATCH = BAR_SCHEMA.fork(['name', 'email'], schema =>
  schema.optional(),
);
