import conn from '../db/airlines';
import mongoose, { FilterQuery } from 'mongoose';
import { ITicketEntity } from '../entities/ticket';

class TicketRepository {
  private model;

  constructor() {
    this.model = conn.models.ticket;
  }

  async getOne(parametrs: FilterQuery<ITicketEntity>): Promise<ITicketEntity> {
    return await this.model.findOne(parametrs);
  }

  async getSome(parametrs: FilterQuery<ITicketEntity>): Promise<ITicketEntity[]> {
    return await this.model.find(parametrs);
  }

  async getAll(): Promise<ITicketEntity[]> {
    return await this.model.find({});
  }

  async create(parametrs: FilterQuery<ITicketEntity>): Promise<void> {
    const id = new mongoose.Types.ObjectId();
    await this.model.create({ ...parametrs, _id: id });
  }

  async updateOne(
    parametrs: FilterQuery<ITicketEntity>,
    info: ITicketEntity,
  ): Promise<void> {
    await this.model.updateOne(parametrs, info);
  }
}

export const ticketRepository = new TicketRepository();
