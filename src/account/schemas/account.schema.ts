import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export enum AccountName {
    BANK_ACCOUNT = 'Bank Account',
    MOBILE_MONEY = 'Mobile Money',
    CASH = 'Cash'
}

@Schema({
    timestamps: true,
})

export class Account{
    @Prop({required:true,enum: AccountName})
    name: string;

    @Prop({required:true})
    accountType: string;

    @Prop({required:true})
    balance: number;
}
export const AccountSchema = SchemaFactory.createForClass(Account);