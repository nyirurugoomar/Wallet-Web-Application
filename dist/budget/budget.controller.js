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
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const create_budget_dto_1 = require("./dto/create-budget.dto");
const swagger_1 = require("@nestjs/swagger");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    async createBudget(budget) {
        return await this.budgetService.createBudget(budget);
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Budget create' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Budget created successfully',
        type: create_budget_dto_1.CreateBudgetDto,
        isArray: true,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fail to create budget' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_budget_dto_1.CreateBudgetDto]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "createBudget", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budget'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map