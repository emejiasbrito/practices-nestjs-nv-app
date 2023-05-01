import { DepartmentUser } from '../../departments-users/entities/departments-users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Department, (departments) => departments.children)
  @JoinColumn({ name: 'father_id' })
  father: Department;

  @OneToMany(() => Department, (departments) => departments.father)
  @JoinColumn({ name: 'children_id' })
  children: Department[];

  @OneToMany(() => DepartmentUser, (user) => user.department)
  @JoinColumn({ name: 'user_id' })
  user: DepartmentUser[];
}
