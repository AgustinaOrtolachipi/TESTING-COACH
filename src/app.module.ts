import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsService } from './services/sessions/sessions.service';
import { UsersService } from './services/users/users.service';
import { SessionsController } from './controllers/sessions/sessions.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, SessionsController, UsersController],
  providers: [AppService, SessionsService, UsersService],
})
export class AppModule {}
