import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const ticketSchema = new Schema({
  _id: ObjectId,
  userID: ObjectId,
  scheduleID: ObjectId,
  price: Number,
  placeNumber: String,
});
