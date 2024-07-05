import { Injectable } from '@nestjs/common';

@Injectable()
export class SesionesService {
  obtenerSaludo(): string {
    return 'Hola desde el servicio de sesiones!';
  }

  crearSesion(sesion: any): string {
    // lógica para crear una sesión
    return 'Sesión creada exitosamente!';
  }

  obtenerSesiones(): any[] {
    // lógica para obtener todas las sesiones
    return [];
  }
}
