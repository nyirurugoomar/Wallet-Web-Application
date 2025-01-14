import { Controller,Post,Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

  @Post('generate')
  @ApiOperation({summary:'Create a report for specified date range you want to see report '})
  async generate(@Body() createReportDto: CreateReportDto) {
    return this.reportService.generateReport(createReportDto);
  }
}
