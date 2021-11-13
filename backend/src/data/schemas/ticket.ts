import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const ticketSchema = new Schema({
  _id: ObjectId,
  user_id: ObjectId,
  schedule_id: ObjectId,
  price: Number,
  place_number: Number,
});
export default ticketSchema;