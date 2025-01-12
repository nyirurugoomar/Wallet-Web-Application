import { Controller,Post,Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

  @Post('generate')
  async generate(@Body() createReportDto: CreateReportDto) {
    return this.reportService.generateReport(createReportDto);
  }
}
