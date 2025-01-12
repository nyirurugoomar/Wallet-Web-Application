import { Transaction } from '../transaction/schemas/transaction.schema';
import { Model } from 'mongoose';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportService {
    private transactionModel;
    constructor(transactionModel: Model<Transaction>);
    generateReport(createReportDto: CreateReportDto): Promise<{
        startDate: string;
        endDate: string;
        totalIncome: number;
        totalExpense: number;
        Balance: number;
    }>;
}
