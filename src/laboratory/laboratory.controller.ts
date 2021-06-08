import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LaboratoryDto } from './dtos/laboratory.dto';
import { Laboratory } from './interfaces/laboratory.interface';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  index(): LaboratoryDto[] {
    return this.laboratoryService.findAll();
  }
  @Post()
  @ApiBody({ type: LaboratoryDto })
  create(@Body() laboratory: LaboratoryDto): LaboratoryDto {
    return this.laboratoryService.create(laboratory);
  }
}
