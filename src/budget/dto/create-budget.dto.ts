import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBudgetDto {
  @ApiProperty({
    description: 'Create limit',
    example: '4000',
  })
  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @ApiProperty({
    description: 'Create current spent',
    example: '2000',
  })
  @IsNumber()
  @IsNotEmpty()
  currentSpent?: number;

  @ApiProperty({
    description: 'Create category',
    example: 'Groceries',
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
