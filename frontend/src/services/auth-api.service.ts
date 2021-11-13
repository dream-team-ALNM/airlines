import { ContentType, HttpMethod } from 'common/enums';
import { ILoginUser, IUser } from 'common/interfaces/user';
import { Http } from './http.service';

class AuthApi {
  private BASE = '/api/auth';
  public async loginUser(loginPayload: ILoginUser): Promise<IUser> {
    return new Http().load(`${this.BASE}/login`, {
      method: HttpMethod.POST,
      payload: JSON.stringify(loginPayload),
      contentType: ContentType.JSON,
    });
  }

  public async registerUser(registerPayload: IUser): Promise<IUser> {
    return new Http().load(`${this.BASE}/signup`, {
      method: HttpMethod.POST,
      payload: JSON.stringify(registerPayload),
      contentType: ContentType.JSON,
    });
  }
}

export { AuthApi };
