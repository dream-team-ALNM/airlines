import { airportsRepository } from '../data/repositories';
import { IAirport } from '../common/interfaces';

export const getAirports = async (): Promise<IAirport[]> => {
  const airports = await airportsRepository.getAll();
  return airports.map((airport) => ({
    name: airport.name,
    id: airport._id,
  })) as IAirport[];
};
