import { HttpError } from '../exceptions';
import { ContentType, HttpHeader, HttpMethod } from '../common/enums';
import { HttpOptions } from '../common/types';

class Http {
  public async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {},
  ): Promise<T> {
    try {
      const { method = HttpMethod.GET, payload = null, contentType } = options;
      const headers = this.getHeaders(contentType);

      const response = await fetch(`http://localhost:3001${url}`, {
        method,
        headers,
        body: payload,
      });
      await this.checkStatus(response);

      return this.parseJSON<T>(response);
    } catch (err) {
      this.throwError(err as HttpError);
    }
  }

  private getHeaders(contentType?: ContentType): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const error = await response.json();
      throw new HttpError({
        status: response.status,
        message: error.msg || error.error,
      });
    }
    return response;
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export { Http };
