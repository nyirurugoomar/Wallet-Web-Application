import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';
import { Account } from 'src/account/schemas/account.schema';

@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
        @InjectModel(Account.name) private accountModel: Model<Account>
    ) {}

    async getAllTransactions() {
        return this.transactionModel.find().populate('account category',).exec();
    }

    async createTransaction(amount: number, type: string, accountId: string, categoryId: string){
        const account = await this.accountModel.findById(accountId);
        if(!account) {
            throw new HttpException('Account does not exist', HttpStatus.NOT_FOUND);
        }

        if(type === 'expense' && account.balance < amount) {
            throw new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);
        }

        const transaction = new this.transactionModel({
            amount,
            type,
            account: accountId,
            category: categoryId,
            date: new Date(),
        });
        await transaction.save();

        account.balance += type === 'income' ? amount : -amount;
        await account.save();
        const populatedTransaction = await this.transactionModel
            .findById(transaction._id)
            .populate('account category')
            .exec();

        return populatedTransaction;
    }
}
