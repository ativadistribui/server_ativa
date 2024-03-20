import { userLoginService } from "../../services/user/userLogin.service";
import { Request, Response } from "express";

export const userLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body as { email: string; password: string };
  const [status, token] = await userLoginService(data);

  return res.status(status).json({ token });
};
