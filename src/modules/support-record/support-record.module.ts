import { Module } from '@nestjs/common';
import { SupportRecordController } from './support-record.controller';
import { SupportRecordService } from './support-record.service';

@Module({
  controllers: [SupportRecordController],
  providers: [SupportRecordService]
})
export class SupportRecordModule {}
