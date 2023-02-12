import { Controller,Post, Get, Put, Delete, Body, Param, UploadedFile, UseInterceptors, UseGuards, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
@Controller()
export class ProductController {
    constructor(private productService: ProductService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('image'))
  async upload(@Req() request, @UploadedFile() image, @Body() product) {

    console.log(request.user,11211212)

    const imageUrl = `src/uploads/${image.originalname}`;

    await fs.promises.writeFile(imageUrl, image.buffer);


    return this.productService.createProduct({ ...product, image: imageUrl}, request.user);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    console.log('Product 743687364')
    return this.productService.getProductById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: Product) {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

}

