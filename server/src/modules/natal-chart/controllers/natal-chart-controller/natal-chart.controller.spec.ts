import { Test, TestingModule } from '@nestjs/testing';
import { NatalChartController } from './natal-chart.controller';

describe('NatalChart Controller', () => {
  let controller: NatalChartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NatalChartController],
    }).compile();

    controller = module.get<NatalChartController>(NatalChartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
