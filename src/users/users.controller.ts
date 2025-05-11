import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@Query() userData: UserDto) {
    if (userData.name.length > 10) {
      throw new BadRequestException('name is too long');
    }
    if (userData.age < 18) {
      throw new BadRequestException('name is too short and age is too young');
    }
    return this.usersService.getUser(userData);
  }
}
