import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const airportsSchema = new Schema({
  _id: ObjectId,
  name: String,
});
export default airportsSchema;