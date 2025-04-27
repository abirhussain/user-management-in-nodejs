import { Request, Response, NextFunction } from "express";
import { loginSchema, registerSchema } from "../validators/authValidator";
import * as authService from "../services/authService";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedUserInfo = registerSchema.parse(req.body);
    const result = await authService.register(
      validatedUserInfo.email,
      validatedUserInfo.password
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validated = loginSchema.parse(req.body);
    const result = await authService.login(validated.email, validated.password);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
