/* eslint-disable */
import { hash, verify } from '../common/utils';
import { userRepository } from '../data/repositories';
import { HttpError } from '../common/errors';
import { IUser, ILoginUser } from '../common/interfaces';
import { HttpCode, HttpErrorMessage } from '../common/enums';

export const login = async (body: ILoginUser): Promise<IUser> => {
  console.log(body);

  const user = await userRepository.getOne({
    email: body.email.toLowerCase(),
  });
  if (!user || user.password === null) {
    throw new HttpError({
      status: HttpCode.BAD_REQUEST,
      message: HttpErrorMessage.INVALID_LOGIN_DATA,
    });
  }

  const isPasswordCorrect = await verify(body.password, user.password);
  if (!isPasswordCorrect) {
    throw new HttpError({
      status: HttpCode.BAD_REQUEST,
      message: HttpErrorMessage.INVALID_LOGIN_DATA,
    });
  }
  return user as IUser;
};

export const register = async (body: ILoginUser): Promise<IUser> => {
  console.log(body);
  const existingUser = await userRepository.getOne({
    email: body.email.toLowerCase(),
  });

  if (existingUser && existingUser.password !== null) {
    throw new HttpError({
      status: HttpCode.CONFLICT,
      message: HttpErrorMessage.EMAIL_ALREADY_EXISTS,
    });
  }

  const hashedPassword = await hash(body.password);
  const userData = {
    ...body,
    email: body.email.toLowerCase(),
    password: hashedPassword,
  };
  console.log(userData);

  await userRepository.create(userData);

  const createdUser = await userRepository.getOne({
    email: body.email.toLowerCase(),
  });

  console.log(createdUser);

  return createdUser as IUser;
};
