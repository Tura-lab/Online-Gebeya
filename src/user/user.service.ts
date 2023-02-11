import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/types/user';
import { JwtService } from '@nestjs/jwt';
import { UserSchema } from 'src/models/user.schema';
import { UserJwtPayload } from 'src/types/jwt-payload';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signin(user): Promise<{ accessMessage: string }> {
    const foundUser = await this.userModel.findOne({
      email: user.email
    });

    if (foundUser) {
      const isMatch = await bcrypt.compare(user.password, foundUser.password);
      console.log(foundUser)

      if (!isMatch) {
        throw new UnauthorizedException('Incorrect login credentials!');
      }

      console.log(foundUser);
      const typeid = user.id;
      const payload: UserJwtPayload = { username: user.email, typeid };
      const accessMessage: string = await this.jwtService.sign(payload);


      return { accessMessage };
    } else {
      throw new UnauthorizedException('Incorrect login credentials!');
    }
  }

  async createUser(user): Promise<User> {
    const foundUser = await this.userModel.findOne({ email: user.email });


    if (foundUser) {
      throw new BadRequestException('Email already used!');
    }

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = await (await this.userModel.create(user)).save();
    
    return newUser;
  }
}
