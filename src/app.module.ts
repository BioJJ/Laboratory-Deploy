import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamModule } from './exam/exam.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ExamModule, LaboratoryModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
