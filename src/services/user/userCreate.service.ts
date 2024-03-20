import { User } from "../../entity/User";
import AppDataSource from "../../data-source";
import { IUser, IUserReturned } from "../../interfaces/user.interfaces";
import { userCreateReturnedSerializer } from "../../serializer/user.serializer";

export const createUserService = async (
  data: IUser
): Promise<IUserReturned> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create(data);

  await userRepo.save(user);

  const userSerialized = (await userCreateReturnedSerializer.validate(user, {
    stripUnknown: true,
  })) as IUserReturned;

  return userSerialized;
};
