import { IsNumber, IsString } from "class-validator";


export class userDTO {
    @IsString()
    nombre: string;
    @IsString()
    apellido: string;
    @IsNumber()
    edad: number;
    @IsString()
    telefono: string;
    @IsString()
    email: string;
    @IsString()
    comentario: string;
};