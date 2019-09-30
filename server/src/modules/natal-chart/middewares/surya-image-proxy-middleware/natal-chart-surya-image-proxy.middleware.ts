import { Injectable, NestMiddleware } from '@nestjs/common';
import * as proxy from 'http-proxy-middleware';

import { ConfigService } from '../../../../config/services/config.service';

@Injectable()
export class NatalChartSuryaImageProxyMiddleware implements NestMiddleware {
  constructor(private readonly configService?: ConfigService) {}

  use(req: any, res: any, next: () => void) {
    return proxy({
      target: this.configService.get('JYOTISH_PROXY'),
      changeOrigin: true,
      pathRewrite: {
        '/natal-chart': '/images/data',
      },
    })(req, res, next);
  }
}
