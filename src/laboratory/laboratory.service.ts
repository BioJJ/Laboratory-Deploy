import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoryEntity } from './interfaces/laboratory.entity';
import { Laboratory } from './interfaces/laboratory.interface';

@Injectable()
export class LaboratoryService {
  constructor(
    @InjectRepository(LaboratoryEntity)
    private laboratoryRepository: Repository<LaboratoryEntity>,
  ) {}

  async findAll(): Promise<LaboratoryEntity[]> {
    return await this.laboratoryRepository.find();
  }

  async create(laboratory: Laboratory): Promise<LaboratoryEntity> {
    return await this.laboratoryRepository.save(laboratory);
  }
}
