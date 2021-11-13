import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const scheduleSchema = new Schema({
  _id: ObjectId,
  plane_id: ObjectId,
  start_date: Date,
  end_date: Date,
  from: String,
  to: String,
});
export default scheduleSchema;