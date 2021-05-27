import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserRepository } from '../../infrastructure/mongo/repository/user.repository';
import { User } from '../models/user.model';
import { AuthHelper } from '../helper/auth.helper';

describe('testing UserService', () => {
  let service: UserService;
  const userServiceMock = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository],
    })
      .overrideProvider(UserService)
      .useValue(userServiceMock)
      .compile();

    service = module.get<UserService>(UserService);
  });
  describe('Testing user Service after mock', () => {
    it('testing getById method', () => {
      expect(typeof service.getUserById('1')).not.toEqual(null);
    });
  });
});
