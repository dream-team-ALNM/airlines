import { IQuery, IRoute, ITicketInfo } from 'common/interfaces';
import { Http } from './http.service';
import { getStringifiedQuery } from '../helpers';

class AccountApi {
  private BASE = '/api/account';
  public async getRoutes(query?: IQuery): Promise<IRoute[]> {
    return new Http().load(
      `${this.BASE}/routes${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }

  public async getTicketInfo(query?: IQuery): Promise<ITicketInfo> {
    return new Http().load(
      `${this.BASE}/ticket${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }
}

export { AccountApi };
