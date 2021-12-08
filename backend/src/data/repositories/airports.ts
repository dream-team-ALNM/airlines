import conn from '../db/airlines';
import mongoose, { FilterQuery } from 'mongoose';
import { IAirportEntity } from '../entities';

class AirportsRepository {
  private model;

  constructor() {
    this.model = conn.models.airports;
  }

  async getOne(
    parametrs: FilterQuery<IAirportEntity>,
  ): Promise<IAirportEntity> {
    return await this.model.findOne(parametrs);
  }

  async getSome(
    parametrs: FilterQuery<IAirportEntity>,
  ): Promise<IAirportEntity[]> {
    return await this.model.find(parametrs);
  }

  async getAll(): Promise<IAirportEntity[]> {
    return await this.model.find({});
  }

  async create(parametrs: FilterQuery<IAirportEntity>): Promise<void> {
    const id = new mongoose.Types.ObjectId();
    await this.model.create({ ...parametrs, _id: id });
  }

  async updateOne(
    parametrs: FilterQuery<IAirportEntity>,
    info: IAirportEntity,
  ): Promise<void> {
    await this.model.updateOne(parametrs, info);
  }
}

export const airportsRepository = new AirportsRepository();
