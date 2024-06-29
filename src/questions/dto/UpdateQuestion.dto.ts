import { IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateQuestionDto {
  @IsString()
  readonly question?: string;

  @IsArray()
  @IsString({ each: true })
  readonly answers?: string[];

  @IsOptional()
  @IsString()
  readonly solvePath?: string;

  @IsOptional()
  @IsString()
  readonly level?: string;
}
