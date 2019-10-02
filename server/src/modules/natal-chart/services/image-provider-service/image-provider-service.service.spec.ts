import { Test, TestingModule } from '@nestjs/testing';
import { ImageProviderServiceService } from './image-provider-service.service';

describe('ImageProviderServiceService', () => {
  let service: ImageProviderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageProviderServiceService],
    }).compile();

    service = module.get<ImageProviderServiceService>(ImageProviderServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
