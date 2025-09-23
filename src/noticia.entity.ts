import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Le dice a TypeORM que esta clase es una tabla de la BD
export class Noticia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  content: string;

  // Añadiremos un campo para la imagen que tu componente Card necesita
  @Column({ default: 'https://ejemplo.com/imagen.jpg' })
  image: string;
}