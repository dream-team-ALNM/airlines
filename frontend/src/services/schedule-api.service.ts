import { ITime, IQuery } from 'common/interfaces';
import { Http } from './http.service';
import { getStringifiedQuery } from '../helpers';

class ScheduleApi {
  private BASE = '/api/schedule';
  public async getTimes(query?: IQuery): Promise<ITime[]> {
    return new Http().load(
      `${this.BASE}/time${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }
}

export { ScheduleApi };
