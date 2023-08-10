import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialsModule } from './tutorials/tutorials.module';
import { dbConfig } from './configs/db.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    dbConfig, // DB Config
    TutorialsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
