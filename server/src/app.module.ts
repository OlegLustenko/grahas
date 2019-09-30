import * as proxy from 'http-proxy-middleware';
import { join } from 'path';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from './config/services/config.service';

import { NatalChartSuryaImageProxyMiddleware } from './modules/natal-chart/middewares/surya-image-proxy-middleware/natal-chart-surya-image-proxy.middleware';
import { NatalChartController } from './modules/natal-chart/controllers/natal-chart-controller/natal-chart.controller';

import { NatalChartModule } from './modules/natal-chart/natal-chart.module';
import { ConfigModule } from './config/config.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [
    NatalChartModule,
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      installSubscriptionHandlers: true,
    }),
    ImagesModule,
    ConfigModule,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private readonly configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(proxy({
        target: this.configService.get('JYOTISH_PROXY'),
        changeOrigin: true,
        pathRewrite: {
          '/natal-chart': '/images/data',
        },
      }))
      .forRoutes(NatalChartController);
  }
}
