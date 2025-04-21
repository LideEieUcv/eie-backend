import { ApiProperty } from '@nestjs/swagger';

export class EventoDto {
  @ApiProperty()
  id: number;
  
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  date: number;
  
  @ApiProperty()
  day: string;
  
  @ApiProperty()
  month: string;

  @ApiProperty()
  hour: string;

  @ApiProperty()
  description: string;
}