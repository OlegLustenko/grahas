import { Test, TestingModule } from '@nestjs/testing';
import { NatalChartService } from './natal-chart.service';

describe('NatalChartService', () => {
  let service: NatalChartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NatalChartService],
    }).compile();

    service = module.get<NatalChartService>(NatalChartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
