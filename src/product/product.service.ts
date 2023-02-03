import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductSchema } from 'src/models/product.schema';
import { Product } from 'src/types/product';



@Injectable()
export class ProductService {


  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }



}