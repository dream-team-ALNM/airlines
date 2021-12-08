import conn from '../db/airlines';
import mongoose, { FilterQuery } from 'mongoose';
import { IScheduleEntity } from '../entities';

class ScheduleRepository {
  private model;

  constructor() {
    this.model = conn.models.schedule;
  }

  async getOne(parametrs: FilterQuery<IScheduleEntity>): Promise<IScheduleEntity> {
    return await this.model.findOne(parametrs);
  }

  async getSome(parametrs: FilterQuery<IScheduleEntity>): Promise<IScheduleEntity[]> {
    return await this.model.find(parametrs);
  }

  async getAll(): Promise<IScheduleEntity[]> {
    return await this.model.find({});
  }

  async create(parametrs: FilterQuery<IScheduleEntity>): Promise<void> {
    const id = new mongoose.Types.ObjectId();
    await this.model.create({ ...parametrs, _id: id });
  }

  async updateOne(
    parametrs: FilterQuery<IScheduleEntity>,
    info: IScheduleEntity,
  ): Promise<void> {
    await this.model.updateOne(parametrs, info);
  }
}

export const schedulesRepository = new ScheduleRepository();
