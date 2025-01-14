import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})

export class Budget{
    @Prop({required:true})
    limit: number;

    @Prop({ default: 0 })
    currentSpent?: number;

    @Prop({required:true})
    categoryId: string;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);