import { HttpMethod } from 'common/enums';
import { IAirport } from 'common/interfaces/airports';
import { Http } from './http.service';

class AirportsApi {
  private BASE = '/api/airports';
  public async getAirports(): Promise<IAirport[]> {
    return new Http().load(this.BASE, {
      method: HttpMethod.GET,
    });
  }
}

export { AirportsApi };
