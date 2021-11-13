import mongoose from 'mongoose';

export interface IUserEntity extends mongoose.Document {
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  record?: number;
}
