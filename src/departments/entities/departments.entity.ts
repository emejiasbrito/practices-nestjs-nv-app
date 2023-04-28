import { DepartmentUser } from '../../departments-users/entities/departments-users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Department, (departments) => departments.children)
  father: Department;

  @OneToMany(() => Department, (departments) => departments.father)
  children: Department[];

  @OneToMany(() => DepartmentUser, (user) => user.department)
  user: DepartmentUser[];
}
