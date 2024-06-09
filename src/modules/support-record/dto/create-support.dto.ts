import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupportDto {
  @ApiProperty({
    example: 'Bu bir destek mesajıdır.',
    description: 'Destek mesajı içeriği',
  })
  @IsNotEmpty({ message: 'Mesaj alanı boş bırakılamaz' })
  @IsString({ message: 'Mesaj bir metin olmalıdır' })
  readonly message: string;

  @ApiProperty({
    example: 1,
    description: 'Kullanıcı ID',
  })
  @IsNotEmpty({ message: 'Kullanıcı ID alanı boş bırakılamaz' })
  @IsString({ message: 'Kullanıcı ID string olmalıdır' })
  readonly userId: string;
}
