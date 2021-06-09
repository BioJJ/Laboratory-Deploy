import { ApiProperty } from '@nestjs/swagger';

export class LaboratoryExamDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  laboratoryYd: number;

  @ApiProperty()
  examId: number;
}
