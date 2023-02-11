import { Controller,Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product';
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
  async create(@Body() product: Product) {
    return this.productService.createProduct(product);
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

