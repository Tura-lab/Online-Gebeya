import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/types/user';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserService } from './user.service';



@Controller()
export class UserController {

    constructor(private userService: UserService){}

    @Post('signup')
    async signUp(@Body() data: User) {

        return this.userService.createUser(data);
    }

    @Post('signin')
    async signIn(@Body() user:User) {
        return this.userService.signin(user);
    }

}
