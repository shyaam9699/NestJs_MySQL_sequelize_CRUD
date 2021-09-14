import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @MinLength(8)
    Password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
  }