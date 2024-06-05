import { Module } from '@nestjs/common';
import { SupportRecordController } from './support-record.controller';
import { SupportRecordService } from './support-record.service';
import { MailService } from '../mail/mail.service';
import { DomainService } from './domain/domain.service';
import { CreateRepositoryService } from './repository/create-repository.service';
import { FindRepositoryService } from './repository/find-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { SupportRecord } from './entities/support-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportRecord]), UserModule],
  controllers: [SupportRecordController],
  providers: [
    SupportRecordService,
    DomainService,
    FindRepositoryService,
    CreateRepositoryService,
    MailService,
  ],
  exports: [
    SupportRecordService,
    DomainService,
    FindRepositoryService,
    CreateRepositoryService,
  ],
})
export class SupportRecordModule {}
