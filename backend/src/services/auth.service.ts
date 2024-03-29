import mongoose from 'mongoose';
import { hash, verify } from '../common/utils';
import { userRepository } from '../data/repositories';
import { HttpError } from '../common/errors';
import { IUser, ILoginUser } from '../common/interfaces';
import { HttpCode, HttpErrorMessage } from '../common/enums';

export const login = async (body: ILoginUser): Promise<IUser> => {
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
  const { email, fullName, age, _id } = user;
  return { email, fullName, age, id: _id } as IUser;
};

export const register = async (body: ILoginUser): Promise<IUser> => {
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

  await userRepository.create(userData);

  const createdUser = await userRepository.getOne({
    email: body.email.toLowerCase(),
  });
  const { email, fullName, age, _id } = createdUser;
  return { email, fullName, age, id: _id } as IUser;
};

export const getUserInfo = async (userId: string): Promise<IUser> => {
  const user = await userRepository.getOne({
    _id: mongoose.Types.ObjectId(userId),
  });
  const { email, fullName, age, _id } = user;
  return { email, fullName, age, id: _id } as IUser;
};
