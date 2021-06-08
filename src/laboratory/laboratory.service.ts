import { Injectable } from '@nestjs/common';
import { LaboratoryDto } from './dtos/laboratory.dto';
import { Laboratory } from './interfaces/laboratory.interface';

@Injectable()
export class LaboratoryService {
  private laboratories: LaboratoryDto[] = [];

  findAll(): LaboratoryDto[] {
    return this.laboratories;
  }

  create(laboratory: LaboratoryDto): LaboratoryDto {
    this.laboratories.push(laboratory);
    return laboratory;
  }
}
