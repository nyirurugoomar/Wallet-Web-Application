import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})

export class Category{
    @Prop()
    name: string;
    
    @Prop()
    subCategory?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);