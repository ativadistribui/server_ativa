import { Request, Response } from "express";
import { createUserService } from "../../services/user/userCreate.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const user = await createUserService(data);

  return res.status(201).json(user);
};
