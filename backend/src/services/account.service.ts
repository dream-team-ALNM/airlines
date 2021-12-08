import mongoose from 'mongoose';
import { IRoute, ITicketInfo } from '~/common/interfaces';
import {
  ticketRepository,
  schedulesRepository,
  airportsRepository,
  planesRepository,
} from '../data/repositories';

export const getRoutes = async (id: string): Promise<IRoute[]> => {
  const tickets = await ticketRepository.getSome({
    userId: mongoose.Types.ObjectId(id),
  });
  const routes: Array<{ [key: string]: string }> = [];
  for (const ticket of tickets) {
    const sch = await schedulesRepository.getOne({
      _id: ticket.scheduleId,
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

export const getTicketInfo = async (id: string): Promise<ITicketInfo> => {
  const ticket = await ticketRepository.getOne({
    _id: mongoose.Types.ObjectId(id),
  });
  const schedule = await schedulesRepository.getOne({
    _id: ticket.scheduleId,
  });
  const plane = await planesRepository.getOne({
    _id: schedule.planeId,
  });
  return {
    placeNumber: ticket.placeNumber,
    planeName: plane.name,
  } as ITicketInfo;
};
