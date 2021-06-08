import { Body, Controller, Get, Post } from '@nestjs/common';
import { Laboratory } from './interfaces/laboratory.interface';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  index(): Laboratory[] {
    return this.laboratoryService.findAll();
  }
  @Post()
  create(@Body() laboratory: Laboratory): Laboratory {
    return this.laboratoryService.create(laboratory);
  }
}
