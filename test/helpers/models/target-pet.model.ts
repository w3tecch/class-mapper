import { SourcePetModel } from './source-pet.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetPetModel {
  @MapFromSource((source: SourcePetModel) => source.name1)
  public name!: string;
}
