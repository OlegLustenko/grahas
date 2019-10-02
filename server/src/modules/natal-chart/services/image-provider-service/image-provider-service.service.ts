import { Injectable } from '@nestjs/common';
import * as querystring from 'querystring';

@Injectable()
export class ImageProviderServiceService {
  private _staticUrl: string = 'natal-chart';

  generateImagePath(url: string) {
    const xxx = querystring.parse(url, '?') as { id: string };

    return xxx.id;
  }
}
