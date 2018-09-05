import { SourceCustomerModel } from './source-customer.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export abstract class TargetPersonModel {
  @MapFromSource((source: SourceCustomerModel) => source.name1, { groups: ['customer'] })
  public firstName!: string;

  @MapFromSource((source: SourceCustomerModel) => source.name2, { groups: ['customer'] })
  public lastName!: string;
}
