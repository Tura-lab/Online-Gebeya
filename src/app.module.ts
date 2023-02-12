import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'users',
        module: UserModule,
      },
      {
        path: 'products',
        module: ProductModule,
      },
    ]),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    ProductModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}