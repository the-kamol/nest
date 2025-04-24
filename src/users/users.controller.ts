import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@Query() userData: UserDto) {
    return this.usersService.getUser(userData);
  }
}
