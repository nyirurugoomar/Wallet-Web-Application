import {IsString ,IsNotEmpty,IsNumber} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto{
    @ApiProperty({
        description:'Create account name',
        example:'CHOOSE: Bank Account | Mobile money | Cash'
    })
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty({
        description:'Type of account',
        example:'Bank'
    })
    @IsString()
    @IsNotEmpty()
    accountType:string;


    @ApiProperty({
        description:'Balance',
        example:'1000'
    })
    @IsNumber()
    @IsNotEmpty()
    balance:number;
}
