import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  _id: ObjectId,
  e_mail: String,
  password: String,
  full_name: String,
  age: Number,
});
export default userSchema;