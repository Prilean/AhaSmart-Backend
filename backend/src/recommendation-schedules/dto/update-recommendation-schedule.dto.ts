import { PartialType } from '@nestjs/swagger';
import { CreateRecommendationScheduleDto } from './create-recommendation-schedule.dto';

export class UpdateRecommendationScheduleDto extends PartialType(CreateRecommendationScheduleDto) {}
