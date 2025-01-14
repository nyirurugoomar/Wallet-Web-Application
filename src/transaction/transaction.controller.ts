import { Controller,Post, Get, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
    constructor (private transactionService: TransactionService){}

    @Get()
    @ApiOperation({summary:'Get list of Transaction'})
    @ApiResponse({
      status: 200,
      description: 'List of Transaction Successfully',
    })
    @ApiNotFoundResponse({description:'Fail to fetch list of Transaction'})
  async getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

  @Post()
  @ApiOperation({summary:'Transaction create'})
  @ApiResponse({
    status: 201,
    description: 'Transaction create successfully',
    type:CreateTransactionDto,
    isArray:true
  })
  @ApiNotFoundResponse({description:'Fail to create transaction'})
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
