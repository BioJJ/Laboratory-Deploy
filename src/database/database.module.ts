import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryEntity } from 'src/laboratory/interfaces/laboratory.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'laboratorydb',
      database: 'laboratorydb',
      entities: [LaboratoryEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
