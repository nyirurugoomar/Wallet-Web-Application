import { Controller,Get,Post,Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor (private categoryService:CategoryService){}

    @Get()
    async getAllCategories() {
      return this.categoryService.getAllCategories();
    }    
    @Post()
  async createCategory(@Body() createCategory:CreateCategoryDto ) {
    return await this.categoryService.createCategory(createCategory);
  }
}
