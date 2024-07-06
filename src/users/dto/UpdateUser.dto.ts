import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Subject } from 'src/Interfaces/subject.interface';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly password?: string;

  @IsOptional()
  @IsString()
  readonly phoneNumber?: string;

  @IsOptional()
  @IsString()
  readonly level?: number;

  @IsArray()
  @IsOptional()
  @IsString()
  readonly subjectStatistic?: Subject[];
}
