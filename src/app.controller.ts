import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
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

