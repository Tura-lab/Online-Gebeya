import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { AppService } from './app.service';
import { JwtAuthGuard } from './user/guards/jwt-auth.guard';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('3')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(@UploadedFiles() file){
    console.log(file);  
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res){
    return res.sendFile(image, {root: 'src/uploads'});
  }

}


