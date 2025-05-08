import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getUser(userData: UserDto): User {
    const user: User = {
      name: userData.name,
      phone: userData.phone,
      age: userData.age,
      email: userData.email,
      locale: userData.locale,
      timezone: userData.timezone,
    };
    this.users.push(user);
    return user;
  }
}
