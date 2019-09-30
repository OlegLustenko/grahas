import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../../../../config/services/config.service';
import { User } from '../../../../core/entities/user';
import { NatalChart } from '../../../../graphql';

import { NatalChartModel } from '../../models/natal-chart-model';
import { NatalChartSuryaLanguageApiAdapter } from '../natal-chart-surya-language-api-adapter/natal-chart-surya-language-api-adapter';

const baseUrl = 'https://www.surya-language.com/api/json/';

@Injectable()
export class NatalChartService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly natalChartSuryaLanguageAdapter: NatalChartSuryaLanguageApiAdapter,
  ) {}
  async getChart(user: User): Promise<Observable<string>> {
    const userId = this.configService.get('USER_ID');
    const userName = this.configService.get('USER_NAME');
    const transformedData = this.natalChartSuryaLanguageAdapter.transform(user);
    const preparedDate = {
      ...transformedData,
      data: {
        ...transformedData.data,
        user: userName,
      },
      userId,
    };
    console.log(preparedDate);

    return this.httpService
      .post(baseUrl, preparedDate, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((response: AxiosResponse<NatalChart>) => response.data.answerText),
      );
  }
}
