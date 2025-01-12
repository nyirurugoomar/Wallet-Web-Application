import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './schemas/account.schema';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    getAllAccount(): Promise<Account[]>;
    createAccount(createAccount: CreateAccountDto): Promise<{
        message: string;
        account: Account;
    }>;
}
