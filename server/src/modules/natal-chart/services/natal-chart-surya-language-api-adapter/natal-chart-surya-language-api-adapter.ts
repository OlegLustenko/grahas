import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user';
import { NatalChartModel } from '../../models/natal-chart-model';

@Injectable()
export class NatalChartSuryaLanguageApiAdapter {
  transform(natalChart: User) {
    const natalChartSuryaLanguage = new NatalChartModel();

    const datetime = `${natalChart.date} ${natalChart.time}`;

    return {
      data: {
        ...natalChartSuryaLanguage,
        datetime,
        la: natalChart.coordinates.latitude,
        lo: natalChart.coordinates.longitude,
      },
      operation: 'print',
    };
  }
}
