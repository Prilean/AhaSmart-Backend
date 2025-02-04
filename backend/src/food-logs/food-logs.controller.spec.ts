import { Test, TestingModule } from '@nestjs/testing';
import { FoodLogsController } from './food-logs.controller';
import { FoodLogsService } from './food-logs.service';

describe('FoodLogsController', () => {
  let controller: FoodLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodLogsController],
      providers: [FoodLogsService],
    }).compile();

    controller = module.get<FoodLogsController>(FoodLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
