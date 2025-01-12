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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const swagger_1 = require("@nestjs/swagger");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async getAllAccount() {
        return await this.accountService.getAllAccounts();
    }
    async createAccount(createAccount) {
        return await this.accountService.createAccount(createAccount);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of accounts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of accounts successfully',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fail to fetch list of accounts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAllAccount", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Account create' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Account create successfully',
        type: create_account_dto_1.CreateAccountDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fail to create account' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map