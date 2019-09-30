import { Controller, Get, Query } from '@nestjs/common';

@Controller('natal-chart')
export class NatalChartController {
  @Get()
  get(@Query('id') id: string) {
    console.log(id);
  }
}
