import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LaboratoryDto } from './dtos/laboratory.dto';
import { LaboratoryEntity } from './interfaces/laboratory.entity';
import { Laboratory } from './interfaces/laboratory.interface';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  async index(): Promise<LaboratoryEntity[]> {
    return await this.laboratoryService.findAll();
  }
  @Post()
  @ApiBody({ type: LaboratoryDto })
  async create(@Body() laboratory: Laboratory): Promise<LaboratoryEntity> {
    return await this.laboratoryService.create(laboratory);
  }
}
