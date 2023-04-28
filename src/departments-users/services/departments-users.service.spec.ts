import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentUserService } from './departments-users.service';

describe('DepartmentUserService', () => {
  let service: DepartmentUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentUserService],
    }).compile();

    service = module.get<DepartmentUserService>(DepartmentUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
