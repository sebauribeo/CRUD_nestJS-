import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class userDTO {
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    apellido: string;
    @IsNotEmpty()
    @IsNumber()
    edad: number;
    @IsNotEmpty()
    @IsString()
    telefono: string;
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsString()
    comentario: string;
};