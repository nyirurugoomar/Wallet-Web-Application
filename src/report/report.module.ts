import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { TransactionSchema } from '../transaction/schemas/transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forFeature([
        {name:'Transaction',schema:TransactionSchema},
      ])],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
