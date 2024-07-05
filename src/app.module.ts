import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SesionesService } from './sesiones/sesiones.service';
import { CoachesService } from './coaches/coaches.service';
import { SesionesController } from './sesiones/sesiones.controller';
import { CoachesController } from './coaches/coaches.controller';

@Module({
  imports: [],
  controllers: [AppController, SesionesController, CoachesController],
  providers: [AppService, SesionesService, CoachesService],
})
export class AppModule {}
