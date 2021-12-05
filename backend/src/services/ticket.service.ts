import { IPlaceNumber, ITicket } from '~/common/interfaces';
import { ticketRepository, userRepository } from '../data/repositories';

export const getOccupiedPlaces = async (): Promise<IPlaceNumber[]> => {
  const tickets = await ticketRepository.getAll();
  return tickets.map(({ placeNumber }) => ({
    placeNumber,
  })) as IPlaceNumber[];
};

export const buyTicket = async (data: ITicket[]): Promise<void> => {
  const [user] = data;
  if (!user.userId && user.fullName) {
    const now = Date.now();
    const userData = {
      fullName: user.fullName,
      email: `${now}@gmail.com`,
    };

    await userRepository.create(userData);
    const createdUser = await userRepository.getOne({
      email: `${now}@gmail.com`,
    });
    for (const record of data) {
      const updatedRecord = { ...record, userId: createdUser._id };
      await ticketRepository.create(updatedRecord);
    }
  } else {
    for (const record of data) {
      await ticketRepository.create(record);
    }
  }
};
