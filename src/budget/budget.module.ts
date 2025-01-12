import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { BudgetSchema } from './schemas/budget.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Budget',schema:BudgetSchema}])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
