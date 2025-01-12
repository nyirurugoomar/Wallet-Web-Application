import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionModule } from './transaction/transaction.module';
import { CategoryModule } from './category/category.module';
import { BudgetModule } from './budget/budget.module';
import { ReportModule } from './report/report.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true,
     }),
     MongooseModule.forRoot(process.env.DB_URI),
    AccountModule,
    TransactionModule,
    CategoryModule,
    BudgetModule,
    ReportModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
