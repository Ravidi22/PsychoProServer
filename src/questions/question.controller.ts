import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: any) {
    return this.questionService.createQuestions(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.getQuestions();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.getQuestionById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: any) {
    return this.questionService.updateQuestion(id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.deleteQuestion(id);
  }
}
