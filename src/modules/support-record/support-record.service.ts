// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";
// import { User } from "../user/entities/user.entity";
// import { CreateSupportDto } from "./dto/create-support.dto";
// import { SupportRecord } from "./entities/support-record.entity";
// import { DomainService } from "./domain/domain.service";

// @Injectable()
// export class SupportRecordService {
//   constructor(private readonly domainService: DomainService) {}

//   async createSupportRecord(
//     createSupportDto: CreateSupportDto
//   ): Promise<SupportRecord> {
//     return this.domainService.createRepositoryService.create(createSupportDto);
//   }
// }

import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { CreateSupportDto } from './dto/create-support.dto';
import { SupportRecord } from './entities/support-record.entity';
import { DomainService } from './domain/domain.service';
import { UserService } from '../user/user.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class SupportRecordService {
  constructor(
    private readonly domainService: DomainService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  async createSupportRecord(
    createSupportDto: CreateSupportDto,
  ): Promise<SupportRecord> {
    const { message, userId } = createSupportDto;

    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const recentSupportRecord =
      await this.domainService.findRepositoryService.findOne({
        where: { user: { id: userId } },
        order: { createdAt: 'DESC' },
      });
    console.log(recentSupportRecord);

    if (recentSupportRecord) {
      const currentTime = new Date();
      const createdAt = new Date(recentSupportRecord.createdAt);

      const currentTimeLocal = new Date(
        currentTime.getTime() - currentTime.getTimezoneOffset() * 60000,
      );
      const createdAtLocal = new Date(
        createdAt.getTime() - createdAt.getTimezoneOffset() * 60000,
      );

      const timeDifference =
        currentTimeLocal.getTime() - createdAtLocal.getTime();

      const diffInMinutes = timeDifference / (1000 * 60);

      console.log(`Time difference: ${diffInMinutes} minutes`);

      if (diffInMinutes < 30) {
        throw new BadRequestException(
          '30 dakika içinde sadece bir talep oluşturabilirsiniz.',
        );
      }
    }
    await this.mailService.sendSupportRequestAcknowledgementEmail(user.email);
    return this.domainService.createRepositoryService.create(createSupportDto);
  }
}
