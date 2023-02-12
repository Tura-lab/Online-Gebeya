import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/models/product.schema';
import { UserSchema } from 'src/models/user.schema';
import { JwtStrategy } from 'src/user/strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  providers: [ProductService, JwtStrategy],
  controllers: [ProductController],
})
export class ProductModule {}
