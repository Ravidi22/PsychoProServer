import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { SignInDto } from './dto/SignIn.dto';
import { CreateUserDto } from './dto/CreateUser.dto';
import { Subject } from 'src/Interfaces/subject.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }

  getUserById(id: string) {
    return this.userModel.findById(id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  validateUser(signInDto: SignInDto) {
    const { name, password } = signInDto;
    const user = this.userModel.find(
      (user) => user.name === name && user.password === password,
    );
    return user;
  }
}
