import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Budget } from './schemas/budget.schema';
import { CreateBudgetDto } from './dto/create-budget.dto';
@Injectable()
export class BudgetService {
    constructor(
      @InjectModel(Budget.name)
      private budgetModel: mongoose.Model<Budget>
    ){}

    async createBudget(budget:CreateBudgetDto):Promise<{message:string;budget:Budget}>{
        
        const newBudget  = await this.budgetModel.create(budget)

        return{
            message:'Budget Created successfully',
            budget:newBudget
        }
    }

}
