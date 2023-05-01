import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';
import { Department } from '../../departments/entities/departments.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'departments_users' })
export class DepartmentUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Department, (department) => department.user)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => User, (user) => user.department)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
