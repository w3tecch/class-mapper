import { SourcePetModel } from '../models/source-pet.model';
import { TargetPetModel } from '../models/target-pet.model';

/**
 * plain pets structure
 */

const petsPlain = [
  {
    name1: 'Nemo'
  },
  {
    name1: 'Dory'
  },
];

/**
 * source pets model
 */

export const sourcePets = petsPlain.map(petPlain => {
  const sourcePet = new SourcePetModel();
  sourcePet.name1 = petPlain.name1;

  return sourcePet;
});

/**
 * target pets model
 */

export const targetPets = petsPlain.map(petPlain => {
  const targetPet = new TargetPetModel();
  targetPet.name = petPlain.name1;

  return targetPet;
});
