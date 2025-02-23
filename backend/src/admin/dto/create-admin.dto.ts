import { IsEmail, IsOptional, IsString } from 'class-validator';
export class CreateAdminDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  role?: string = 'admin';

  @IsString()
  refreshToken: string;
}
