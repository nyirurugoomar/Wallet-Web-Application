import { Injectable } from '@nestjs/common';
import { Transaction } from '../transaction/schemas/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportService {
    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
      ) {}

      async generateReport(createReportDto: CreateReportDto) {
        const { startDate, endDate } = createReportDto;
    
        
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        
        const transactions = await this.transactionModel.find({
          date: { $gte: start, $lte: end }
        }).exec();
    
        
        let totalIncome = 0;
        let totalExpense = 0;
    
        transactions.forEach((transaction) => {
          if (transaction.type === 'income') {
            totalIncome += transaction.amount;
          } else if (transaction.type === 'expense') {
            totalExpense += transaction.amount;
          }
        });
    
        const netBalance = totalIncome - totalExpense;
    
        return {
          startDate,
          endDate,
          totalIncome,
          totalExpense,
          netBalance
        };
      }
}
