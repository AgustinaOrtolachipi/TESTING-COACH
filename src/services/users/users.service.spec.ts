import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user = service.createUser('user1', 'password1');
    expect(user).toEqual(expect.objectContaining({
      username: 'user1',
      password: 'password1',
    }));
  });

  it('should update a user', () => {
    const user = service.createUser('user1', 'password1');
    const updatedUser = service.updateUser(user.id, 'updatedUser', 'updatedPassword');
    expect(updatedUser).toEqual(expect.objectContaining({
      username: 'updatedUser',
      password: 'updatedPassword',
    }));
  });

  it('should delete a user', () => {
    const user = service.createUser('user1', 'password1');
    service.deleteUser(user.id);
    expect(service.getUsers()).not.toContain(user);
  });

  it('should get all users', () => {
    service.createUser('user1', 'password1');
    service.createUser('user2', 'password2');
    const users = service.getUsers();
    expect(users.length).toBe(2);
  });

  it('should subtract two numbers', () => {
    expect(service.subtractNumbers(5, 3)).toBe(2);
  });
});
