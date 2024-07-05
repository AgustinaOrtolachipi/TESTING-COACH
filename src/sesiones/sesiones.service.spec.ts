import { Test, TestingModule } from '@nestjs/testing';
import { SesionesService } from './sesiones.service';

describe('SesionesService', () => {
  let service: SesionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionesService],
    }).compile();

    service = module.get<SesionesService>(SesionesService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería retornar mensaje de saludo', () => {
    expect(service.obtenerSaludo()).toBe('Hola desde el servicio de sesiones!');
  });

  it('debería crear una sesión correctamente', () => {
    expect(service.crearSesion({})).toBe('Sesión creada exitosamente!');
  });

  it('debería obtener todas las sesiones', () => {
    expect(service.obtenerSesiones()).toEqual([]);
  });
});
