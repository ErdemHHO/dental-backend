import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { DomainService } from './domain/domain.service';
import { CreateRepositoryService } from './repository/create-repository.service';
import { DeleteRepositoryService } from './repository/delete-repository.service';
import { FindRepositoryService } from './repository/find-repository.service';
import { UpdateRepositoryService } from './repository/update-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    DomainService,
    FindRepositoryService,
    CreateRepositoryService,
    UpdateRepositoryService,
    DeleteRepositoryService,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
