import { Test, TestingModule } from '@nestjs/testing';
import { QuestLogsService } from './quest-logs.service';

describe('QuestLogsService', () => {
  let service: QuestLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestLogsService],
    }).compile();

    service = module.get<QuestLogsService>(QuestLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
