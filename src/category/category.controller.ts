import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  @ApiOperation({ summary: 'Category' })
  @ApiResponse({
    description: 'List of category',
  })
  @ApiNotFoundResponse({ description: 'Fail to get list of category' })
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }
  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ description: 'Category Created successfully' })
  @ApiNotFoundResponse({ description: 'Fail to to create category' })
  async createCategory(@Body() createCategory: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategory);
  }
}
