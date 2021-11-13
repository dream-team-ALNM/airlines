import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const scheduleSchema = new Schema({
  _id: ObjectId,
  plane_id: ObjectId,
  start_date: String,
  end_date: String,
  from: ObjectId,
  to: ObjectId,
});
export default scheduleSchema;
