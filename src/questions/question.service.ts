import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from 'src/schemas/Question.schema';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { UpdateQuestionDto } from './dto/UpdateQuestion.dto';
import { GetQuestionsDto } from './dto/GetQuestions.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  createQuestions(createQuestionDto: CreateQuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  getQuestions() {
    return this.questionModel.find().exec();
  }

  getQuestionById(id: string) {
    return this.questionModel.findById(id).exec();
  }

  updateQuestion(id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto);
  }

  deleteQuestion(id: string) {
    return this.questionModel.findByIdAndDelete(id);
  }

  async getQuestionsByCriteria(getQuestionsDto: GetQuestionsDto) {
    const { amount, subject, level } = getQuestionsDto;
    return this.questionModel.find({ subject, level }).limit(amount).exec();
  }
}
