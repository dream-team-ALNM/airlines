/* eslint-disable no-console */
import { airportsRepository } from '../data/repositories';
// import { HttpError } from '../common/errors';
import { IAirport } from '../common/interfaces';
// import { HttpCode, HttpErrorMessage } from '../common/enums';

export const getAirports = async (): Promise<IAirport[]> => {
  const airports = await airportsRepository.getAll();
  return airports as IAirport[];
};
