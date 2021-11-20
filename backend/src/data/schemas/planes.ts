import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const planesSchema = new Schema({
  _id: ObjectId,
  name: String,
  price: Number,
  businessPrice: Number,
});
