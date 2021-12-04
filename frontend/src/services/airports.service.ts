import { IAirport } from 'common/interfaces/airports';
import { Http } from './http.service';

class Airports {
  public async getAirports(): Promise<IAirport[]> {
    const airport: IAirport[] = await new Http().load('/api/airports');
    return airport;
  }
}

export { Airports };
