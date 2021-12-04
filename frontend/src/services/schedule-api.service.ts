import { ITime, IQuery, IEnd } from 'common/interfaces';
import { Http } from './http.service';
import { getStringifiedQuery } from '../helpers';

class ScheduleApi {
  private BASE = '/api/schedule';
  public async getTimes(query?: IQuery): Promise<ITime[]> {
    return new Http().load(
      `${this.BASE}/time${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }

  public async getEnd(query?: IQuery): Promise<IEnd> {
    return new Http().load(
      `${this.BASE}/end${query ? `?${getStringifiedQuery(query)}` : ''}`,
    );
  }
}

export { ScheduleApi };
