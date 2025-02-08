import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { FoodCategoryModule } from './food-category/food-category.module';
import { FoodModule } from './food/food.module';
import { FoodLogsModule } from './food-logs/food-logs.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RecommendationSchedulesModule } from './recommendation-schedules/recommendation-schedules.module';
import { GoalsModule } from './goals/goals.module';
import { QuestLogsModule } from './quest-logs/quest-logs.module';
import { QuestsModule } from './quests/quests.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, FoodCategoryModule, FoodModule, FoodLogsModule, NotificationsModule, RecommendationSchedulesModule, GoalsModule, QuestLogsModule, QuestsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
