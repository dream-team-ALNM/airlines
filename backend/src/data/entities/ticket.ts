import mongoose, { ObjectId } from 'mongoose';

export interface ITicketEntity extends mongoose.Document {
  userID?: ObjectId,
  scheduleID?: ObjectId,
  price?: number,
  placeNumber?: string,
}
