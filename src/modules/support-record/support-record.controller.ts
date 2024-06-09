import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSupportDto } from './dto/create-support.dto';
import { SupportRecord } from './entities/support-record.entity';
import { SupportRecordService } from './support-record.service';

@ApiTags('support-record')
@Controller('support-record')
export class SupportRecordController {
  constructor(private readonly supportService: SupportRecordService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new support record' })
  @ApiResponse({
    status: 201,
    description: 'The support record has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation failed.',
  })
  async createSupportRecord(
    @Body() createSupportDto: CreateSupportDto,
  ): Promise<SupportRecord> {
    return this.supportService.createSupportRecord(createSupportDto);
  }
}
