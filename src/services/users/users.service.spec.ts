// Módulos necesarios de NestJS para las pruebas
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

// Se describe el conjunto de pruebas para el servicio de usuarios
describe('UsersService', () => {
  let service: UsersService;

  // Antes de cada prueba, se conigura un módulo de prueba de NestJS
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService], // Proveedor del servicio que estamos probando
    }).compile();

    // Se obtiene una instancia del servicio de usuarios
    service = module.get<UsersService>(UsersService);
  });

  // Prueba para verificar que el servicio esté definido
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Prueba para verificar la creación de un usuario
  it('should create a user', () => {
    const user = service.createUser('user1', 'password1');
    expect(user).toEqual(expect.objectContaining({
      username: 'user1',
      password: 'password1',
    }));
  });

  // Prueba para verificar la actualización de un usuario
  it('should update a user', () => {
    const user = service.createUser('user1', 'password1');
    const updatedUser = service.updateUser(user.id, 'updatedUser', 'updatedPassword');
    expect(updatedUser).toEqual(expect.objectContaining({
      username: 'updatedUser',
      password: 'updatedPassword',
    }));
  });

  // Prueba para verificar la eliminación de un usuario
  it('should delete a user', () => {
    const user = service.createUser('user1', 'password1');
    service.deleteUser(user.id);
    expect(service.getUsers()).not.toContain(user);
  });

  // Prueba para verificar la obtención de todos los usuarios
  it('should get all users', () => {
    service.createUser('user1', 'password1');
    service.createUser('user2', 'password2');
    const users = service.getUsers();
    expect(users.length).toBe(2);
  });

  // Prueba para verificar la resta de dos números
  it('should subtract two numbers', () => {
    expect(service.subtractNumbers(5, 3)).toBe(2);
  });
});
