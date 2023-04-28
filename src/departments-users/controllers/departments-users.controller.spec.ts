import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentUserController } from './departments-users.controller';

describe('DepartmentUserController', () => {
  let controller: DepartmentUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentUserController],
    }).compile();

    controller = module.get<DepartmentUserController>(DepartmentUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
