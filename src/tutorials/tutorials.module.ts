import { Module } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { TutorialsController } from './tutorials.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tutorial } from './tutorials.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Tutorial]),
  ],
  controllers: [TutorialsController],
  providers: [TutorialsService]
})
export class TutorialsModule {}
