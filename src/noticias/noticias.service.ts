import { Injectable } from '@nestjs/common';
import { Noticia } from './entities/noticia.entity';

@Injectable()
export class NoticiasService {
  private noticias: Noticia[] = [
    {
      id: 1,
      title: "Título desde el servicio",
      date: "2023-12-10",
      content: "Contenido real desde el servicio",
      imageUrl: "https://www.google.com/imgres?q=url%20image%20students&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fcheerful-arab-female-student-smartphone-260nw-2190346781.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstudents&docid=niuRFvtgYh2XQM&tbnid=ET1mUH2T0LTbSM&vet=12ahUKEwiA88D36OmMAxWaRTABHYi5BG8QM3oECHsQAA..i&w=390&h=280&hcb=2&ved=2ahUKEwiA88D36OmMAxWaRTABHYi5BG8QM3oECHsQAA"
    }
  ];

  findAll(): Noticia[] {
    return this.noticias;
  }

  findOne(id: number): Noticia | undefined {
    return this.noticias.find(noticia => noticia.id === id);
  }
}