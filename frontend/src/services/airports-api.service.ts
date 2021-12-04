import { HttpMethod } from 'common/enums';
import { IAirport } from 'common/interfaces/airports';
import { Http } from './http.service';

class AirportsApi {
  public async getAirports(): Promise<IAirport[]> {
    return new Http().load('/api/airports', {
      method: HttpMethod.GET,
    });
  }
}

export { AirportsApi };
