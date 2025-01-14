import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    generate(createReportDto: CreateReportDto): Promise<{
        startDate: Date;
        endDate: Date;
        totalIncome: number;
        totalExpense: number;
        netBalance: number;
    }>;
}
