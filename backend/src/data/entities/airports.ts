import mongoose, { ObjectId } from 'mongoose';

export interface IAirportEntity extends mongoose.Document {
  name?: string;
  id?: ObjectId;
}
