import { Transaction } from '../transaction/schemas/transaction.schema';
import { Model } from 'mongoose';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportService {
    private transactionModel;
    constructor(transactionModel: Model<Transaction>);
    generateReport(createReportDto: CreateReportDto): Promise<{
        startDate: Date;
        endDate: Date;
        totalIncome: number;
        totalExpense: number;
        netBalance: number;
    }>;
}
