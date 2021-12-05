import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const ticketSchema = new Schema({
  _id: ObjectId,
  userId: ObjectId,
  scheduleId: ObjectId,
  price: Number,
  placeNumber: String,
});
