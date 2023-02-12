import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { UserSchema } from 'src/models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: 'abcdABCD1234554321',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [UserService, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
