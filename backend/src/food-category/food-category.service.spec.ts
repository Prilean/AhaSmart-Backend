import { Test, TestingModule } from '@nestjs/testing';
import { FoodCategoryService } from './food-category.service';

describe('FoodCategoryService', () => {
  let service: FoodCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodCategoryService],
    }).compile();

    service = module.get<FoodCategoryService>(FoodCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
