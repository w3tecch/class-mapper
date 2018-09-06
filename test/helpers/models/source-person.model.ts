import { SourcePetModel } from './source-pet.model';

export abstract class SourcePersonModel {
  public name1!: string;
  public name2!: string;
  public pets1!: SourcePetModel[];
}
