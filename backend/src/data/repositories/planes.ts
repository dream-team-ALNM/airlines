import conn from '../db/airlines';
import mongoose, { FilterQuery } from 'mongoose';
import { IPlaneEntity } from '../entities';

class PlanesRepository {
  private model;

  constructor() {
    this.model = conn.models.planes;
  }

  async getOne(parametrs: FilterQuery<IPlaneEntity>): Promise<IPlaneEntity> {
    return await this.model.findOne(parametrs);
  }

  async getSome(parametrs: FilterQuery<IPlaneEntity>): Promise<IPlaneEntity[]> {
    return await this.model.find(parametrs);
  }

  async getAll(): Promise<IPlaneEntity[]> {
    return await this.model.find({});
  }

  async create(parametrs: FilterQuery<IPlaneEntity>): Promise<void> {
    const id = new mongoose.Types.ObjectId();
    await this.model.create({ ...parametrs, _id: id });
  }

  async updateOne(
    parametrs: FilterQuery<IPlaneEntity>,
    info: IPlaneEntity,
  ): Promise<void> {
    await this.model.updateOne(parametrs, info);
  }
}

export const planesRepository = new PlanesRepository();
