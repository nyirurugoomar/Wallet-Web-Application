import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySchema } from './schemas/category.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[MongooseModule.forFeature([{name:'Category',schema:CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
