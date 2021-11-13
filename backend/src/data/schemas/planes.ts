import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const planesSchema = new Schema({
  _id: ObjectId,
  name: String,
  price: Number,
  business_price: Number,
});
export default planesSchema;