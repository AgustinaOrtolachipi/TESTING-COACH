// Importamos el decorador Injectable de @nestjs/common
import { Injectable } from '@nestjs/common';

// Decorador que marca la clase como un proveedor que puede ser inyectado en otras partes de la aplicación
@Injectable()
export class UsersService {
  // Declaramos una propiedad privada que almacenará los usuarios
  private users = [];

  // Método para crear un usuario
  createUser(username: string, password: string) {
    // Creamos un nuevo usuario con un ID único basado en la marca de tiempo actual
    const user = { id: Date.now().toString(), username, password };
    // Agregamos el usuario a la lista de usuarios
    this.users.push(user);
    // Devolvemos el usuario creado
    return user;
  }

  // Método para actualizar un usuario existente
  updateUser(id: string, username: string, password: string) {
    // Buscamos el usuario por su ID
    const user = this.users.find(user => user.id === id);
    if (user) {
      // Si el usuario existe, actualizamos sus datos
      user.username = username;
      user.password = password;
      // Devolvemos el usuario actualizado
      return user;
    }
    // Si el usuario no existe, devolvemos null
    return null;
  }

  // Método para eliminar un usuario por su ID
  deleteUser(id: string) {
    // Filtramos la lista de usuarios para excluir el usuario con el ID especificado
    this.users = this.users.filter(user => user.id !== id);
  }

  // Método para obtener todos los usuarios
  getUsers() {
    // Devolvemos la lista de usuarios
    return this.users;
  }

  // Método para restar dos números
  subtractNumbers(a: number, b: number): number {
    // Devolvemos la resta de los dos números
    return a - b;
  }
}
