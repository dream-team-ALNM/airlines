import { HttpMethod } from '../common/enums';
import { IPlaceNumber } from '../common/interfaces';
import { Http } from './http.service';

class TicketApi {
  private BASE = '/api/ticket';
  public async getOccupiedPlaces(): Promise<IPlaceNumber[]> {
    return new Http().load(`${this.BASE}/places`, {
      method: HttpMethod.GET,
    });
  }
}

export { TicketApi };
