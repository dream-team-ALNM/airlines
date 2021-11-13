import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const ticketSchema = new Schema({
  _id: ObjectId,
  userID: ObjectId,
  scheduleID: ObjectId,
  price: Number,
  placeNumber: Number,
});
export default ticketSchema;
