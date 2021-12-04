import mongoose from 'mongoose';
import { IRoute } from '~/common/interfaces';
import {
  ticketRepository,
  schedulesRepository,
  airportsRepository,
} from '../data/repositories';

export const getRoutes = async (id: string): Promise<IRoute[]> => {
  const tickets = await ticketRepository.getSome({
    userID: mongoose.Types.ObjectId(id),
  });
  const routes: Array<{ [key: string]: string }> = [];
  for (const ticket of tickets) {
    const sch = await schedulesRepository.getOne({
      _id: ticket.scheduleID,
    });
    const from = await airportsRepository.getOne({
      _id: sch.from,
    });
    const to = await airportsRepository.getOne({
      _id: sch.to,
    });
    routes.push({
      from: from.name,
      to: to.name,
      startDate: sch.startDate,
      endDate: sch.endDate,
      startTime: sch.startTime,
      endTime: sch.endTime,
      id: ticket._id,
    });
  }
  return routes.map((route) => ({
    from: route.from,
    to: route.to,
    startDate: route.startDate,
    endDate: route.endDate,
    startTime: route.startTime,
    endTime: route.endTime,
    id: route.id,
  })) as IRoute[];
};
