import { ExamEntity } from 'src/exam/interfaces/exam.entity';
import { LaboratoryEntity } from 'src/laboratory/interfaces/laboratory.entity';
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LaboratoryExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToMany(() => LaboratoryEntity)
  // @JoinTable()
  // public laboratories: LaboratoryEntity[];

  // @ManyToMany(() => ExamEntity)
  // @JoinTable()
  // public exams: ExamEntity[];

  @ManyToMany(
    () => LaboratoryEntity,
    (laboratoryId: LaboratoryEntity) => laboratoryId.id,
  )
  @JoinTable()
  public laboratories: LaboratoryEntity[];

  @ManyToMany(() => ExamEntity, (examId: ExamEntity) => examId.id)
  @JoinTable()
  public exams: ExamEntity[];
}
