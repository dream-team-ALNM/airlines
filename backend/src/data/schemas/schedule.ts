import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const scheduleSchema = new Schema({
  _id: ObjectId,
  planeID: ObjectId,
  startDate: String,
  startTime: String,
  endDate: String,
  endTime: String,
  from: ObjectId,
  to: ObjectId,
});
