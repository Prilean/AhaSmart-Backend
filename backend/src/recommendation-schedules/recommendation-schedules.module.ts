import { Module } from '@nestjs/common';
import { RecommendationSchedulesService } from './recommendation-schedules.service';
import { RecommendationSchedulesController } from './recommendation-schedules.controller';

@Module({
  controllers: [RecommendationSchedulesController],
  providers: [RecommendationSchedulesService],
})
export class RecommendationSchedulesModule {}
