import * as proxy from 'http-proxy-middleware';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from './config/services/config.service';

import { NatalChartController } from './modules/natal-chart/controllers/natal-chart-controller/natal-chart.controller';

import { NatalChartModule } from './modules/natal-chart/natal-chart.module';
import { ConfigModule } from './config/config.module';
import { ImagesModule } from './modules/images/images.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'client/build'),
    }),
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
      .apply(
        proxy({
          target: this.configService.get('JYOTISH_PROXY'),
          changeOrigin: true,
          pathRewrite: {
            '/natal-chart': '/images/data',
          },
        }),
      )
      .forRoutes(NatalChartController);
  }
}
