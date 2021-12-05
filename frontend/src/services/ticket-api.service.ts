import { ContentType, HttpMethod } from '../common/enums';
import { IPlaceNumber, ITicket } from '../common/interfaces';
import { Http } from './http.service';

class TicketApi {
  private BASE = '/api/ticket';

  public async getOccupiedPlaces(): Promise<IPlaceNumber[]> {
    return new Http().load(`${this.BASE}/places`);
  }

  public async buyTicket(buyTicketPayload: ITicket[]): Promise<void> {
    return new Http().load(this.BASE, {
      method: HttpMethod.POST,
      payload: JSON.stringify(buyTicketPayload),
      contentType: ContentType.JSON,
    });
  }
}

export { TicketApi };
