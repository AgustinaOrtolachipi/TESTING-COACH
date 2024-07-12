import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionsService {
  private sessions = [];

  createSession(title: string, description: string, coach: string, date: string) {
    const session = { id: Date.now().toString(), title, description, coach, date };
    this.sessions.push(session);
    return session;
  }

  updateSession(id: string, title: string, description: string, coach: string, date: string) {
    const session = this.sessions.find(session => session.id === id);
    if (session) {
      session.title = title;
      session.description = description;
      session.coach = coach;
      session.date = date;
      return session;
    }
    return null;
  }

  deleteSession(id: string) {
    this.sessions = this.sessions.filter(session => session.id !== id);
  }

  getSessions() {
    return this.sessions;
  }

  addNumbers(a: number, b: number): number {
    return a + b;
  }
}
