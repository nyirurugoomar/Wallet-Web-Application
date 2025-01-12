import { Category } from './schemas/category.schema';
import * as mongoose from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: mongoose.Model<Category>);
    getAllCategories(): Promise<(mongoose.Document<unknown, {}, Category> & Category & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createCategory(category: CreateCategoryDto): Promise<{
        message: string;
        category: Category;
    }>;
}
