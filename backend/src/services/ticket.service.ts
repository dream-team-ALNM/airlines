import { IPlaceNumber } from '~/common/interfaces';
import { ticketRepository } from '../data/repositories';

export const getOccupiedPlaces = async (): Promise<IPlaceNumber[]> => {
  const tickets = await ticketRepository.getAll();
  return tickets.map(({ placeNumber }) => ({
    placeNumber,
  })) as IPlaceNumber[];
};
