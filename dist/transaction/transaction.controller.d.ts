import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    getAllTransactions(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction> & import("./schemas/transaction.schema").Transaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createTransaction(body: {
        amount: number;
        type: string;
        accountId: string;
        categoryId: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction> & import("./schemas/transaction.schema").Transaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
