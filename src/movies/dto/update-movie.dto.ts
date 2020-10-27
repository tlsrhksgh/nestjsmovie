import { IsNumber, IsString } from "class-validator";
import { Movie } from "../entities/Movie.entity";
import {PartialType} from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}