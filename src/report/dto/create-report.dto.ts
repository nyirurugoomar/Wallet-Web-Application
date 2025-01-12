import { IsDateString } from 'class-validator';

export class CreateReportDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}