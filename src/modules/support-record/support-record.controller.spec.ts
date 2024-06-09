import { Test, TestingModule } from '@nestjs/testing';
import { SupportRecordController } from './support-record.controller';

describe('SupportRecordController', () => {
  let controller: SupportRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportRecordController],
    }).compile();

    controller = module.get<SupportRecordController>(SupportRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
