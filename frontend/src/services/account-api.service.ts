import { IQuery, IRoute } from 'common/interfaces';
import { Http } from './http.service';
import { getStringifiedQuery } from '../helpers';

class AccountApi {
  private BASE = '/api/account';
  public async getRoutes(query?: IQuery): Promise<IRoute[]> {
    return new Http().load(
      `${this.BASE}${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }
}

export { AccountApi };
