import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationSchedulesService } from './recommendation-schedules.service';

describe('RecommendationSchedulesService', () => {
  let service: RecommendationSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationSchedulesService],
    }).compile();

    service = module.get<RecommendationSchedulesService>(RecommendationSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
