import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from 'mongoose';

@Schema({
    timestamps: true,
})

export class Transaction{

    @Prop()
    amount: number;

    @Prop()
    type: string;

    @Prop()
    date: Date;

    @Prop({ type: Types.ObjectId, ref: 'Account' })
    account: Types.ObjectId[];

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    category: Types.ObjectId[];

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction)