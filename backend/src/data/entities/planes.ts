import mongoose from 'mongoose';

export interface IPlaneEntity extends mongoose.Document {
  name?: string;
  price?: number;
  businessPrice?: number;
  id?: string;
}
