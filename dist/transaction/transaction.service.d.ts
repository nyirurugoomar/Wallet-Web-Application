import { Model } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';
import { Account } from 'src/account/schemas/account.schema';
export declare class TransactionService {
    private transactionModel;
    private accountModel;
    constructor(transactionModel: Model<Transaction>, accountModel: Model<Account>);
    getAllTransactions(): Promise<(import("mongoose").Document<unknown, {}, Transaction> & Transaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createTransaction(amount: number, type: string, accountId: string, categoryId: string): Promise<import("mongoose").Document<unknown, {}, Transaction> & Transaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
