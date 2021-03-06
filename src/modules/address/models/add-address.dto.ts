import { IsNumber, IsOptional, IsString } from 'class-validator';

import { IAddress } from './IAdress';

export class AddAddressDto implements Omit<IAddress, 'id'> {
  @IsString()
  userId: string;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsNumber()
  houseNumber: number;

  @IsOptional()
  @IsNumber()
  pavilion?: number;
}
