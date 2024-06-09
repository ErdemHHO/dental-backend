import { Test, TestingModule } from '@nestjs/testing';
import { SupportRecordService } from './support-record.service';

describe('SupportRecordService', () => {
  let service: SupportRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportRecordService],
    }).compile();

    service = module.get<SupportRecordService>(SupportRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
