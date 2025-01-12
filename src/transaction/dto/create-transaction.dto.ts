import { IsString, IsNotEmpty, IsNumber,IsDate } from 'class-validator';

export class CreateTransactionDto{

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    type: string;


    @IsDate()
    @IsNotEmpty()
    date: Date;
 
    @IsString()
    accountId:string

    @IsString()
    categoryId:string
}