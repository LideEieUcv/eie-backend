import { ApiProperty } from '@nestjs/swagger';

export class NoticiaDto {
  @ApiProperty()
  id: number;
  
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  date: string;
  
  @ApiProperty()
  content: string;

  @ApiProperty()
  imageUrl: string;
}