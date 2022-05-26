import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class DocumentEntity extends BaseEntity {
    @PrimaryGeneratedColumn ()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    edad: number;
    @Column()
    telefono: string;
    @Column()
    email: string;
    @Column()
    comentario: string;
};