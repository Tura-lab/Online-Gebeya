import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/types/product';
import { User } from 'src/types/user';



@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>,@InjectModel('User')  private userModel: Model<User>) { }

  async createProduct(product: Product, user): Promise<Product> {


    const uploader: User = await this.userModel.findOne(
      {email: user.username}
    )

    let newProduct = {...product, owner: uploader.id}

    const createdProduct = new this.productModel(newProduct);

    console.log(createdProduct,837458364)



    return await createdProduct.save();
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();

    // const id = await products[0].owner

    // const owner = await this.userModel.findOne({ _id: id });

    // console.log(owner,7637634)

    return products

  }

  async getProductById(id: string): Promise<Product> {
    return await this.productModel.findOne({_id: id})
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, { new: true });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id);
  }
}