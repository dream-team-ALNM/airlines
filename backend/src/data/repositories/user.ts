import conn from '../db/airlines';
import mongoose, { FilterQuery } from 'mongoose';
import { IUserEntity } from '../entities/user';

class UserRepository {
  private model;

  constructor() {
    this.model = conn.models.user;
  }

  async getOne(parametrs: FilterQuery<IUserEntity>): Promise<IUserEntity> {
    return await this.model.findOne(parametrs);
  }

  async getSome(parametrs: FilterQuery<IUserEntity>): Promise<IUserEntity[]> {
    return await this.model.find(parametrs);
  }

  async getAll(): Promise<IUserEntity[]> {
    return await this.model.find({});
  }

  async create(parametrs: FilterQuery<IUserEntity>): Promise<void> {
    const id = new mongoose.Types.ObjectId();
    await this.model.create({ ...parametrs, _id: id });
  }

  async updateOne(
    parametrs: FilterQuery<IUserEntity>,
    info: IUserEntity,
  ): Promise<void> {
    await this.model.updateOne(parametrs, info);
  }
}

export const userRepository = new UserRepository();
