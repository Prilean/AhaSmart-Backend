import { Test, TestingModule } from '@nestjs/testing';
import { QuestLogsController } from './quest-logs.controller';
import { QuestLogsService } from './quest-logs.service';

describe('QuestLogsController', () => {
  let controller: QuestLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestLogsController],
      providers: [QuestLogsService],
    }).compile();

    controller = module.get<QuestLogsController>(QuestLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
