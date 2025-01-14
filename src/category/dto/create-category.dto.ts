import { IsString, IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto{


    @ApiProperty({
        description:'Create a new category',
        example: 'Groceries'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    subCategory?: string;
}