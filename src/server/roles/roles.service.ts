import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: Partial<CreateRoleDto>): Promise<Role> {
    const role = this.rolesRepository.create(createRoleDto);

    try {
      return await this.rolesRepository.save(role);
    } catch (error) {

    }
  }

  async findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOne({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        description: true,
      }
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = this.rolesRepository.preload({
      id,
      ...updateRoleDto,
    });

    if (!role) throw new BadRequestException('Role not found')

    try {
      return await this.rolesRepository.save(await role).then(async (role) => {
        return role;
      })
    } catch (error) {
        
    }
  }
}
