import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import mongoose from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.ssogond.mongodb.net/?retryWrites=true&w=majority"), ProductModule, UserModule, MulterModule.register({
    dest:'./src/uploads',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
