import { PetitionStatus } from './PetitionStatus';

export interface IPetition {
  id: string;
  date: string;
  addressId: string;
  photosIds: string[];
  userId: string;
  petitionStatus: PetitionStatus;
}
