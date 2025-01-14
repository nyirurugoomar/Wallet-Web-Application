import { IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty({
    description:'Start Date',
    example:'2024-01-01'
  })
  @IsDateString()
  startDate: Date;


  @ApiProperty({
    description:'End Date',
    example:'2024-01-30'
  })
  @IsDateString()
  endDate: Date;
}