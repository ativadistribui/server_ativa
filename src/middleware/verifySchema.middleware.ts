import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

export const verifySchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validated;

      return next();
    } catch (err) {
      return res.status(400).json({
        message: err.errors,
      });
    }
  };
