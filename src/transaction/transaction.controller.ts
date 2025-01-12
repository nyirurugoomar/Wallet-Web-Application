import { Controller,Post, Get, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor (private transactionService: TransactionService){}

    @Get()
  async getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

  @Post()
  async createTransaction(
    @Body() body: { amount: number; type: string; accountId: string; categoryId: string }
  ) {
    return this.transactionService.createTransaction(
      body.amount,
      body.type,
      body.accountId,
      body.categoryId
    );
  }
}
