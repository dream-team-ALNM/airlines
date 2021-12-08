import mongoose from 'mongoose';
import { schedulesRepository } from '../data/repositories';
import { ITime, IEnd } from '../common/interfaces';

export const getTime = async (
  from: string,
  to: string,
  startDate: string,
): Promise<ITime[]> => {
  const times = await schedulesRepository.getSome({
    from: mongoose.Types.ObjectId(from),
    to: mongoose.Types.ObjectId(to),
    startDate,
  });
  const timeReduced = times.map((time) => ({
    value: time.startTime,
    id: time.id,
  }));
  return timeReduced as ITime[];
};

export const getEnd = async (id: string): Promise<IEnd> => {
  const end = await schedulesRepository.getOne({
    _id: mongoose.Types.ObjectId(id),
  });
  return { endTime: end.endTime, endDate: end.endDate } as IEnd;
};
