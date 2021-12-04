import { IPrices } from 'common/interfaces';
import { Http } from './http.service';

class PlanesApi {
  private BASE = '/api/places';

  public async getPrices(id: string): Promise<IPrices> {
    return new Http().load(`${this.BASE}/prices/${id}`);
  }
}

export { PlanesApi };
