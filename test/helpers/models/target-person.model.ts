import { SourceCustomerModel } from './source-customer.model';
import { TargetPetModel } from './target-pet.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';
import { PropertyType } from '../../../src/decorators/property-type.decorator';

export abstract class TargetPersonModel {
  @MapFromSource((source: SourceCustomerModel) => source.name1, { groups: ['customer'] })
  public firstName!: string;

  @MapFromSource((source: SourceCustomerModel) => source.name2, { groups: ['customer'] })
  public lastName!: string;

  @PropertyType(TargetPetModel)
  @MapFromSource((source: SourceCustomerModel) => source.pets1, { groups: ['customer'] })
  public pets!: TargetPetModel[];
}
