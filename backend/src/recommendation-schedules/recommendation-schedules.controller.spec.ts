import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationSchedulesController } from './recommendation-schedules.controller';
import { RecommendationSchedulesService } from './recommendation-schedules.service';

describe('RecommendationSchedulesController', () => {
  let controller: RecommendationSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationSchedulesController],
      providers: [RecommendationSchedulesService],
    }).compile();

    controller = module.get<RecommendationSchedulesController>(RecommendationSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
