import { Test, TestingModule } from '@nestjs/testing';
import { SessionsService } from './sessions.service';

describe('SessionsService', () => {
  let service: SessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionsService],
    }).compile();

    service = module.get<SessionsService>(SessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a session', () => {
    const session = service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    expect(session).toEqual(expect.objectContaining({
      title: 'Session 1',
      description: 'Description 1',
      coach: 'Coach 1',
      date: '2024-01-01',
    }));
  });

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

  it('should delete a session', () => {
    const session = service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    service.deleteSession(session.id);
    expect(service.getSessions()).not.toContain(session);
  });

  it('should get all sessions', () => {
    service.createSession('Session 1', 'Description 1', 'Coach 1', '2024-01-01');
    service.createSession('Session 2', 'Description 2', 'Coach 2', '2024-01-02');
    const sessions = service.getSessions();
    expect(sessions.length).toBe(2);
  });

  it('should add two numbers', () => {
    expect(service.addNumbers(1, 2)).toBe(3);
  });
});
