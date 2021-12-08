import mongoose, { ObjectId } from 'mongoose';

export interface ITicketEntity extends mongoose.Document {
  userId?: ObjectId;
  scheduleId?: ObjectId;
  price?: number;
  placeNumber?: string;
}
