import { Test, TestingModule } from '@nestjs/testing';
import { FoodLogsService } from './food-logs.service';

describe('FoodLogsService', () => {
  let service: FoodLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodLogsService],
    }).compile();

    service = module.get<FoodLogsService>(FoodLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
