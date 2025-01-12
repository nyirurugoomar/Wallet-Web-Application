import * as mongoose from 'mongoose';
import { Account } from './schemas/account.schema';
import { CreateAccountDto } from './dto/create-account.dto';
export declare class AccountService {
    private accountModel;
    constructor(accountModel: mongoose.Model<Account>);
    getAllAccounts(): Promise<Account[]>;
    createAccount(account: CreateAccountDto): Promise<{
        message: string;
        account: Account;
    }>;
}
