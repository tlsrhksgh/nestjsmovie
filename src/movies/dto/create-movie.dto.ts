import { IsNumber, IsString } from "class-validator";
import { Movie } from "../entities/Movie.entity"

export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;
    
    @IsString({ each: false})
    readonly genres: string[];    
}