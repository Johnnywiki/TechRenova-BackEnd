import { Injectable } from '@nestjs/common';
import { User } from './schema/login.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NOMEM } from 'dns';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createNewUser(userInfo: User): Promise<User> {
    const user = await this.userModel.create(userInfo);
    return user;
  }

  async updateUser(userInfo: User, userId: number): Promise<User> {
    return this.userModel.findByIdAndUpdate(userInfo,userId);
  }

  

}
