import mongoose from 'mongoose';

export interface IAirportEntity extends mongoose.Document {
  name?: string;
  _id?: string;
}
