import { Controller, Get } from '@nestjs/common';
import { User } from 'src/types/user';
import { UserService } from './user.service';



@Controller()
export class UserController {

    constructor(private userService: UserService){}

    @Get('signup')
    async signUp() {

        const user = {
            firstname: 'John',
            lastname:'Doe 3',
            email: 'ajkshdfk',
            password: 'string',
            phoneNumber: 962735627,
            created: new Date(),
        }

        

        return this.userService.createUser(user);

    }

    @Get('signin')
    async signIn() {

        const user = {
            email: 'ajkshdfk',
            password: 'string'
        }


        return this.userService.signin(user);

    }

}
