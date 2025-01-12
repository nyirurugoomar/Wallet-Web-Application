import * as mongoose from 'mongoose';
import { Budget } from './schemas/budget.schema';
import { CreateBudgetDto } from './dto/create-budget.dto';
export declare class BudgetService {
    private budgetModel;
    constructor(budgetModel: mongoose.Model<Budget>);
    createBudget(budget: CreateBudgetDto): Promise<{
        message: string;
        budget: Budget;
    }>;
}
