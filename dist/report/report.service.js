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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const transaction_schema_1 = require("../transaction/schemas/transaction.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReportService = class ReportService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async generateReport(createReportDto) {
        const { startDate, endDate } = createReportDto;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const transactions = await this.transactionModel.find({
            date: { $gte: start, $lte: end }
        }).exec();
        let totalIncome = 0;
        let totalExpense = 0;
        transactions.forEach((transaction) => {
            if (transaction.type === 'income') {
                totalIncome += transaction.amount;
            }
            else if (transaction.type === 'expense') {
                totalExpense += transaction.amount;
            }
        });
        const netBalance = totalIncome - totalExpense;
        return {
            startDate,
            endDate,
            totalIncome,
            totalExpense,
            netBalance
        };
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReportService);
//# sourceMappingURL=report.service.js.map