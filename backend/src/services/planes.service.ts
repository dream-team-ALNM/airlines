/* eslint-disable no-console */
import mongoose from 'mongoose';
import { planesRepository, schedulesRepository } from '../data/repositories';
import { IPrices } from '../common/interfaces/planes';

export const getPrices = async (scheduleId: string): Promise<IPrices> => {
  const schedule = await schedulesRepository.getOne({
    _id: mongoose.Types.ObjectId(scheduleId),
  });
  const plane = await planesRepository.getOne({
    _id: schedule.planeId,
  });
  const { price, businessPrice } = plane;
  return { price, businessPrice } as IPrices;
};
