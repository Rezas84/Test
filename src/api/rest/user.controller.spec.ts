import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../../core/services/user.service';
import { UserRepository } from '../../infrastructure/mongo/repository/user.repository';

describe('UserController', () => {
  let userController: UserController;
  const userMockService = {
    createUser: jest.fn((dto) => {
      return {
        ...dto,
      };
    }),

  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository],
    }).overrideProvider(UserService).useValue(userMockService).compile()

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
