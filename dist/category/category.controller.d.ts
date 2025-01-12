import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/category.schema").Category> & import("./schemas/category.schema").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createCategory(createCategory: CreateCategoryDto): Promise<{
        message: string;
        category: import("./schemas/category.schema").Category;
    }>;
}
