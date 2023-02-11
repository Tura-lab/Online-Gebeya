import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/types/product';
import { BadRequestException } from '@nestjs/common';


@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  async getAllProduct(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProductById(id: string): Promise<Product> {
    // if (!(id in this.productModel)) {
    //   throw new BadRequestException('Product not found');
    // }
    return await this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, { new: true });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id);
  }
}