import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const userSchema = new Schema({
  _id: ObjectId,
  email: String,
  password: String,
  fullName: String,
  age: Number,
}, { versionKey: false });
