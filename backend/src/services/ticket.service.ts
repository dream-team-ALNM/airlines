import { IPlaceNumber, ITicket } from '~/common/interfaces';
import { ticketRepository } from '../data/repositories';

export const getOccupiedPlaces = async (
  scheduleId: string,
): Promise<IPlaceNumber[]> => {
  const tickets = await ticketRepository.getSome({ scheduleId });
  return tickets.map(({ placeNumber }) => ({
    placeNumber,
  })) as IPlaceNumber[];
};

export const buyTicket = async (data: ITicket[]): Promise<void> => {
  for (const record of data) {
    await ticketRepository.create(record);
  }
};
