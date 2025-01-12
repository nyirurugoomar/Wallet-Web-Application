import { Injectable } from '@nestjs/common';
import { Category } from './schemas/category.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: mongoose.Model<Category>
    ){}



    async getAllCategories() {
        return this.categoryModel.find().exec();
      }

    async createCategory(category:CreateCategoryDto):Promise<{message:string,category:Category}>{
        const newCategory = await this.categoryModel.create(category)

        return {
            message:'Category Created successfully',
            category:newCategory
        }
    }
}
