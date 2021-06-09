import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoryExamEntity } from './interfaces/laboratory-exam.entity';
import { LaboratoryExam } from './interfaces/laboratory-exam.interface';

@Injectable()
export class LaboratoryExameService {
  constructor(
    @InjectRepository(LaboratoryExamEntity)
    private laboratoryExamRepository: Repository<LaboratoryExamEntity>,
  ) {}

  async findAll(): Promise<LaboratoryExamEntity[]> {
    return await this.laboratoryExamRepository.find();
  }

  async create(laboratoryExam: LaboratoryExam): Promise<LaboratoryExamEntity> {
    return await this.laboratoryExamRepository.save(laboratoryExam);
  }
}
