import { Module } from '@nestjs/common';
import { FoodLogsService } from './food-logs.service';
import { FoodLogsController } from './food-logs.controller';

@Module({
  controllers: [FoodLogsController],
  providers: [FoodLogsService],
})
export class FoodLogsModule {}
