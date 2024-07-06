import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject } from 'src/Interfaces/subject.interface';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  phoneNumber?: string;

  @Prop({ required: false })
  level?: number;

  @Prop({ required: false })
  subjectStatistic?: Subject[];
}

export const userSchema = SchemaFactory.createForClass(User);
