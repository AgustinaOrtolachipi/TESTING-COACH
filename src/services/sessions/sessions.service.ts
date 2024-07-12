// Importamos el decorador Injectable de @nestjs/common
import { Injectable } from '@nestjs/common';

// Decorador que marca la clase como un proveedor que puede ser inyectado en otras partes de la aplicación
@Injectable()
export class SessionsService {
  // Declaramos una propiedad privada que almacenará las sesiones
  private sessions = [];

  // Método para crear una sesión de coaching
  createSession(title: string, description: string, coach: string, date: string) {
    // Creamos una nueva sesión con un ID único basado en la marca de tiempo actual
    const session = { id: Date.now().toString(), title, description, coach, date };
    // Agregamos la sesión a la lista de sesiones
    this.sessions.push(session);
    // Devolvemos la sesión creada
    return session;
  }

  // Método para actualizar una sesión existente
  updateSession(id: string, title: string, description: string, coach: string, date: string) {
    // Buscamos la sesión por su ID
    const session = this.sessions.find(session => session.id === id);
    if (session) {
      // Si la sesión existe, actualizamos sus datos
      session.title = title;
      session.description = description;
      session.coach = coach;
      session.date = date;
      // Devolvemos la sesión actualizada
      return session;
    }
    // Si la sesión no existe, devolvemos null
    return null;
  }

  // Método para eliminar una sesión por su ID
  deleteSession(id: string) {
    // Filtramos la lista de sesiones para excluir la sesión con el ID especificado
    this.sessions = this.sessions.filter(session => session.id !== id);
  }

  // Método para obtener todas las sesiones
  getSessions() {
    // Devolvemos la lista de sesiones
    return this.sessions;
  }

  // Método para sumar dos números
  addNumbers(a: number, b: number): number {
    // Devolvemos la suma de los dos números
    return a + b;
  }
}
