"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const transaction_schema_1 = require("./schemas/transaction.schema");
const account_schema_1 = require("../account/schemas/account.schema");
let TransactionService = class TransactionService {
    constructor(transactionModel, accountModel) {
        this.transactionModel = transactionModel;
        this.accountModel = accountModel;
    }
    async getAllTransactions() {
        return this.transactionModel.find().populate('account category').exec();
    }
    async createTransaction(amount, type, accountId, categoryId) {
        const account = await this.accountModel.findById(accountId);
        if (!account) {
            throw new common_1.HttpException('Account does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        if (type === 'expense' && account.balance < amount) {
            throw new common_1.HttpException('Insufficient balance', common_1.HttpStatus.BAD_REQUEST);
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
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.Transaction.name)),
    __param(1, (0, mongoose_1.InjectModel)(account_schema_1.Account.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map