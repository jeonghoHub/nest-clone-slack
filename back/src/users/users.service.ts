import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getUser() {}

  async join(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.find({ where: { email } });
    if (user.length > 0) {
      throw new UnauthorizedException('이미 존재하는 사용자 입니다,');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
