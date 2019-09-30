import { Test, TestingModule } from '@nestjs/testing';
import { NatalChartResolver } from './natal-chart.resolver';

describe('NatalChartResolver', () => {
  let resolver: NatalChartResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NatalChartResolver],
    }).compile();

    resolver = module.get<NatalChartResolver>(NatalChartResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
