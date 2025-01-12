import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Report {
  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop()
  totalIncome: number;

  @Prop()
  totalExpense: number;

  @Prop()
  netBalance: number;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
