import { PartialType } from '@nestjs/mapped-types/dist/partial-type.helper';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';


export class UpdateMovieDto extends PartialType(CreateMovieDto){}


