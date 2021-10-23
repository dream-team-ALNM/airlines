import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (host: string, db: string): any => {
  const opts = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    poolSize: 5,
  };
  return mongoose.createConnection(`${host}/${db}`, opts);
};
