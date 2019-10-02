import { Get, HttpService, Injectable, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as querystring from 'querystring';

import { ConfigService } from '../../../../config/services/config.service';
import { User } from '../../../../core/entities/user';
import { NatalChart } from '../../../../graphql';

import { NatalChartModel } from '../../models/natal-chart-model';
import { ImageProviderServiceService } from '../image-provider-service/image-provider-service.service';
import { NatalChartSuryaLanguageApiAdapter } from '../natal-chart-surya-language-api-adapter/natal-chart-surya-language-api-adapter';

const baseUrl = 'https://www.surya-language.com/api/json/';

@Injectable()
export class NatalChartService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly natalChartSuryaLanguageAdapter: NatalChartSuryaLanguageApiAdapter,
    private readonly imageProviderServiceService: ImageProviderServiceService,
  ) {}

  async getChart(user: User): Promise<Observable<string>> {
    const preparedDate = this.accumulateUserDate(user);

    return this.httpService.post(baseUrl, preparedDate).pipe(
      map((response: AxiosResponse<NatalChart>) => {
        return this.imageProviderServiceService.generateImagePath(
          response.data.answerText,
        );
      }),
    );
  }

  private accumulateUserDate(user: User) {
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

    return preparedDate;
  }
}
