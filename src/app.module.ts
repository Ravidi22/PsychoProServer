import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.moudle';
import { UsersModule } from './users/users.moudle';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ravidrf22:thl2HKcUouLkMMVQ@psychopro.jihnc3t.mongodb.net/',
    ),
    UsersModule,
    QuestionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
