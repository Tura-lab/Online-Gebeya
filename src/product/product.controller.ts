import { Controller,Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
// import { generate } from 'rxjs';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }



}

