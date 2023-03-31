import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'users/entities/users.entity';
import { CreateUserDto, UpdateUserDto } from 'users/dtos/users.dtos';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  /**
   * Búsca todos los usuarios
   */
  async findAll() {
    return await this.userRepo.find();
  }

  /**
   * Búsca un usuario por id
   * @param id id del usuario a bíscar
   */
  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  /**
   * Inserta un nuevo usuario
   * @param data datos a registrar
   */
  async create(data: CreateUserDto) {
    const newUSer = this.userRepo.create(data);
    return await this.userRepo.save(newUSer);
  }

  /**
   * Actualiza un usuario
   * @param changes datos para actualizar
   */
  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(user, changes);
    return await this.userRepo.save(user);
  }

  /**
   * Elimina un usuario
   * @param id id del usuario a eliiminar
   */
  async remove(id: number) {
    return this.userRepo.delete(id);
  }
}
