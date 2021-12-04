import mongoose, { ObjectId } from 'mongoose';

export interface IScheduleEntity extends mongoose.Document {
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  from?: ObjectId;
  to?: ObjectId;
}
