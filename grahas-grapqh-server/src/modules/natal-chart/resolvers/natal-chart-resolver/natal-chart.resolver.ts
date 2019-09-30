import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../../../core/entities/user';
import { NatalChartService } from '../../services/natal-chart/natal-chart.service';

@Resolver('NatalChart')
export class NatalChartResolver {
  constructor(private readonly natalChartService: NatalChartService) {}

  @Query()
  async chart(@Args('user') user: User) {
    const chart = this.natalChartService.getChart(user);

    return chart;
  }
}
