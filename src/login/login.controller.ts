import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './schema/login.schema';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.loginService.findAllUsers();
  }

  @Post('/save')
  async saveUser(@Body() newUser: User): Promise<User> {
    return this.loginService.createNewUser(newUser);
  }
}
