import { Controller,Post, Get, Put, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async upload(@UploadedFile() image, @Body() product) {
    return this.productService.createProduct({ ...product, image});
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
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

