import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller';
import { TransactionSchema } from './schemas/transaction.schema';
import { AccountSchema } from '../account/schemas/account.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Transaction',schema:TransactionSchema},
    {name:'Account',schema:AccountSchema},
  ])],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
