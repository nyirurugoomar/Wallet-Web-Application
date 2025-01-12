export declare enum AccountName {
    BANK_ACCOUNT = "Bank Account",
    MOBILE_MONEY = "Mobile Money",
    CASH = "Cash"
}
export declare class Account {
    name: string;
    accountType: string;
    balance: number;
}
export declare const AccountSchema: import("mongoose").Schema<Account, import("mongoose").Model<Account, any, any, any, import("mongoose").Document<unknown, any, Account> & Account & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Account, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Account>> & import("mongoose").FlatRecord<Account> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
