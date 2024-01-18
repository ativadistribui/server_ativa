import AppDataSource from "../../data-source";
import { User } from "../../entity/User";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { compare } from "bcryptjs";
import { AppError } from "../../errors/appError";

export const userLoginService = async ({
  email,
  password,
}): Promise<[number, string]> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email });

  if (!user) {
    throw new AppError("Email ou senha incorretos", 403);
  }

  const passwordExists = await compare(password, user.password);

  if (!passwordExists) {
    throw new AppError("Email ou senha incorretos", 403);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return [200, token];
};
