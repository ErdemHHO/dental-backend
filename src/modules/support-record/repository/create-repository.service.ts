import { AbstractRepository } from 'src/common/abstract/abstract-repo-service';
import { AbstractCreate } from 'src/common/abstract/abstract-create.interface';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { UserService } from 'src/modules/user/user.service';
import { MailService } from 'src/modules/mail/mail.service';
import { SupportRecord } from '../entities/support-record.entity';
import { CreateSupportDto } from '../dto/create-support.dto';

@Injectable()
export class CreateRepositoryService
  extends AbstractRepository<SupportRecord>
  implements AbstractCreate<SupportRecord>
{
  constructor(
    @InjectRepository(SupportRecord) repository: Repository<SupportRecord>,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {
    super(repository);
  }
  createMany(): Promise<SupportRecord[]> {
    throw new Error('Method not implemented.');
  }

  async create(
    data: CreateSupportDto,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    const manager = this.selectEntityManager(entityManager);

    const user = await this.userService.findOne(data.userId);
    if (!user) {
      throw new InternalServerErrorException('User not found');
    }

    const entity = new SupportRecord();
    entity.user = user;
    entity.message = data.message;

    try {
      const result = await manager.save(SupportRecord, entity);

      return result;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
