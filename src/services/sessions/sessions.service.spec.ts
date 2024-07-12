// Importamos los módulos necesarios de NestJS para las pruebas
import { Test, TestingModule } from '@nestjs/testing';
// Importamos el servicio que vamos a probar
import { SessionsService } from './sessions.service';

// Describimos el conjunto de pruebas para el servicio de sesiones
describe('SessionsService', () => {
  let service: SessionsService;

  // Antes de cada prueba, configuramos un módulo de prueba de NestJS
  beforeEach(async () => {
    // Creamos un módulo de prueba y lo compilamos
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionsService], // Proveedor del servicio que estamos probando
    }).compile();

    // Obtenemos una instancia del servicio de sesiones
    service = module.get<SessionsService>(SessionsService);
  });

  // Prueba para verificar que el servicio esté definido
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Prueba para verificar la creación de una sesión
  it('should create a session', () => {
    const session = service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    expect(session).toEqual(expect.objectContaining({
      title: 'Session 1',
      description: 'Description 1',
      coach: 'Coach 1',
      date: '2024-01-01',
    }));
  });

  // Prueba para verificar la actualización de una sesión
  it('should update a session', () => {
    const session = service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    const updatedSession = service.updateSession(session.id, 'Updated Session', 'Updated Description', 'Updated Coach', '2024-01-02');
    expect(updatedSession).toEqual(expect.objectContaining({
      title: 'Updated Session',
      description: 'Updated Description',
      coach: 'Updated Coach',
      date: '2024-01-02',
    }));
  });

  // Prueba para verificar la eliminación de una sesión
  it('should delete a session', () => {
    const session = service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    service.deleteSession(session.id);
    expect(service.getSessions()).not.toContain(session);
  });

  // Prueba para verificar la obtención de todas las sesiones
  it('should get all sessions', () => {
    service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    service.createSession('Session 2', 'Description 2', 'Coach 2', '2024-01-02');
    const sessions = service.getSessions();
    expect(sessions.length).toBe(2);
  });

  // Prueba para verificar la suma de dos números
  it('should add two numbers', () => {
    expect(service.addNumbers(1, 2)).toBe(3);
  });
});
