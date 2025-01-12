import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    generate(createReportDto: CreateReportDto): Promise<{
        startDate: string;
        endDate: string;
        totalIncome: number;
        totalExpense: number;
        Balance: number;
    }>;
}
