import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const airportsSchema = new Schema({
  _id: ObjectId,
  name: String,
});
