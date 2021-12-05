import { ContentType, HttpMethod } from '../common/enums';
import { IPlaceNumber, ITicket } from '../common/interfaces';
import { Http } from './http.service';

class TicketApi {
  private BASE = '/api/ticket';

  public async getOccupiedPlaces(scheduleId: string): Promise<IPlaceNumber[]> {
    return new Http().load(`${this.BASE}/places/${scheduleId}`);
  }

  public async buyTicket(buyTicketPayload: ITicket[]): Promise<void> {
    return new Http().load(`${this.BASE}/places`, {
      method: HttpMethod.POST,
      payload: JSON.stringify(buyTicketPayload),
      contentType: ContentType.JSON,
    });
  }
}

export { TicketApi };
