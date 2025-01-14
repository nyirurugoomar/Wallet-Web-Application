import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum AccountName {
  BANK_ACCOUNT = 'Bank Account',
  MOBILE_MONEY = 'Mobile Money',
  CASH = 'Cash',
}

@Schema({
  timestamps: true,
})
export class Account {
  @ApiProperty({
    description: 'Create account name',
    example: 'CHOOSE: Bank Account | Mobile Money | Cash',
  })
  @Prop({ required: true, enum: AccountName })
  name: string;

  @ApiProperty({
    description: 'Type of account',
    example: 'Bank',
  })
  @Prop({ required: true })
  accountType: string;

  @ApiProperty({
    description: 'Balance',
    example: '1000',
  })
  @Prop({ required: true })
  balance: number;
}
export const AccountSchema = SchemaFactory.createForClass(Account);
