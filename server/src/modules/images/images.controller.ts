import { Controller, Get, Query } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get('/data')
  find(@Query('id') id: string): string {
    return id;
  }
}
