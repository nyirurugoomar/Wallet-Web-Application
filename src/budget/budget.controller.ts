import { Controller,Post,Body } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from './schemas/budget.schema';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('budget')
export class BudgetController {
    constructor(
        private budgetService:BudgetService
    ){}

@Post()
@ApiOperation({summary:'Budget create'})
@ApiResponse({
    status: 201,
    description: 'Budget created successfully',
    type:CreateBudgetDto,
    isArray:true
  })
  @ApiNotFoundResponse({description:'Fail to create budget'})
async createBudget(
    @Body()
    budget:CreateBudgetDto
    ):Promise<{message:string,budget:Budget}>{
        return await this.budgetService.createBudget(budget)
    }
}
