import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: Partial<CreateUserDto>): Promise<User> {
    const userExists = await this.findOne(createUserDto.email)

    if (userExists) throw new BadRequestException('User exist!')

    const actualDate = new Date()

    const userData = this.usersRepository.create({
      createdAt: actualDate,
      updateAt: actualDate,
      ...createUserDto
    });

    try {
      return await this.usersRepository.save(userData);
    } catch (error) {

    }
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        email: username
      },
      select: {
        name: true,
        email: true,
        role: true,
      }
    });
  }
}
