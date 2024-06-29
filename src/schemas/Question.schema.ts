import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Question {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  answers: string[];

  @Prop()
  solvePath: string;

  @Prop()
  level: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
