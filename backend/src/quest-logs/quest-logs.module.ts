import { Module } from '@nestjs/common';
import { QuestLogsService } from './quest-logs.service';
import { QuestLogsController } from './quest-logs.controller';

@Module({
  controllers: [QuestLogsController],
  providers: [QuestLogsService],
})
export class QuestLogsModule {}
