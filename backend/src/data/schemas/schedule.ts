import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const scheduleSchema = new Schema({
  _id: ObjectId,
  planeID: ObjectId,
  startDate: String,
  endDate: String,
  from: ObjectId,
  to: ObjectId,
});
export default scheduleSchema;
