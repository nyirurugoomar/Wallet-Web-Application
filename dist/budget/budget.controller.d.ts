import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from './schemas/budget.schema';
export declare class BudgetController {
    private budgetService;
    constructor(budgetService: BudgetService);
    createBudget(budget: CreateBudgetDto): Promise<{
        message: string;
        budget: Budget;
    }>;
}
