import mongoose from 'mongoose';

export interface IUserEntity extends mongoose.Document {
  fullName?: string;
  email?: string;
  password?: string;
  age?: number;
}
