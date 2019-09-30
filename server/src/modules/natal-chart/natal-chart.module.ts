import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { NatalChartController } from './controllers/natal-chart-controller/natal-chart.controller';
import { NatalChartSuryaLanguageApiAdapter } from './services/natal-chart-surya-language-api-adapter/natal-chart-surya-language-api-adapter';
import { NatalChartService } from './services/natal-chart/natal-chart.service';
import { NatalChartResolver } from './resolvers/natal-chart-resolver/natal-chart.resolver';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    NatalChartService,
    NatalChartSuryaLanguageApiAdapter,
    NatalChartResolver,
  ],
  exports: [NatalChartResolver],
  controllers: [NatalChartController],
})
export class NatalChartModule {}
