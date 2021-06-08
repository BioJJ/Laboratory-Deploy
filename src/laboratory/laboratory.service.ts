import { Injectable } from '@nestjs/common';
import { Laboratory } from './interfaces/laboratory.interface';

@Injectable()
export class LaboratoryService {
  private laboratories: Laboratory[] = [];

  findAll(): Laboratory[] {
    return this.laboratories;
  }

  create(laboratory: Laboratory): Laboratory {
    this.laboratories.push(laboratory);
    return laboratory;
  }
}
