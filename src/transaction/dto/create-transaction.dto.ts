import { IsString, IsNotEmpty, IsNumber,IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTransactionDto{

    @ApiProperty({
        description:'Amount',
        example:'1000'
    })
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @ApiProperty({
        description:'Types of transaction',
        example:'income | expense'
    })
    @IsString()
    @IsNotEmpty()
    type: string;


    @ApiProperty({
        description:'Date of transaction',
        example:'1/1/2024'
    })
    @IsDate()
    @IsNotEmpty()
    date: Date;
 

    @ApiProperty({
        description:'AccountID of transaction',
        example:'accountID'
    })
    @IsString()
    accountId:string


    @ApiProperty({
        description:'CategoryID of transaction',
        example:'categoryID'
    })
    @IsString()
    categoryId:string
}