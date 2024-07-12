import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  createUser(username: string, password: string) {
    const user = { id: Date.now().toString(), username, password };
    this.users.push(user);
    return user;
  }

  updateUser(id: string, username: string, password: string) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      user.username = username;
      user.password = password;
      return user;
    }
    return null;
  }

  deleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }

  getUsers() {
    return this.users;
  }

  subtractNumbers(a: number, b: number): number {
    return a - b;
  }
}
