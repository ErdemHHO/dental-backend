import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractOptionalFind } from '../../../common/abstract/abstract-optional-find.interface';

import {
  EntityManager,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { AbstractFind } from '../../../common/abstract/abstract-find.interface';
import { AbstractRepository } from '../../../common/abstract/abstract-repo-service';
import { SupportRecord } from '../entities/support-record.entity';

@Injectable()
export class FindRepositoryService
  extends AbstractRepository<SupportRecord>
  implements AbstractFind<SupportRecord>, AbstractOptionalFind<SupportRecord>
{
  constructor(
    @InjectRepository(SupportRecord) repository: Repository<SupportRecord>,
  ) {
    super(repository);
  }
  findAll(
    options?: FindManyOptions<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord[]> {
    throw new Error('Method not implemented.');
  }
  findBy(
    where: FindOptionsWhere<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord[]> {
    throw new Error('Method not implemented.');
  }
  findOneBy(
    where: FindOptionsWhere<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  findOneById(
    id: string,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  findOneByIdOrFail(
    id: string,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  findOneByIdOrNull(
    id: string,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  find(
    options: FindOneOptions<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord[]> {
    throw new Error('Method not implemented.');
  }
  findOneOrNull(
    options: FindOneOptions<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  findOneByOrNull(
    where: FindOptionsWhere<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    throw new Error('Method not implemented.');
  }
  async findOne(
    options: FindOneOptions<SupportRecord>,
    entityManager?: EntityManager,
  ): Promise<SupportRecord> {
    if (entityManager) {
      return entityManager.findOne(SupportRecord, options);
    } else {
      return this.repository.findOne(options);
    }
  }
}
