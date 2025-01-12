import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemas/account.schema';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name)
        private accountModel:mongoose.Model<Account>
    ){}


    async getAllAccounts():Promise<Account[]>{
        return this.accountModel.find().exec()
    }

    async createAccount(account:CreateAccountDto):Promise<{message:string;account:Account}>{
        const newAccount = await this.accountModel.create(account)
        return {
            message:'Account Created successfully',
            account:newAccount

        }
    }

    
}
