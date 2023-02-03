import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/types/user';



@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }


}
