import { Module } from '@nestjs/common';
import { FoodCategoryService } from './food-category.service';
import { FoodCategoryController } from './food-category.controller';

@Module({
  controllers: [FoodCategoryController],
  providers: [FoodCategoryService],
})
export class FoodCategoryModule {}
