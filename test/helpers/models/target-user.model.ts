import { TargetAddressModel } from './target-address.model';
import { TargetCarModel } from './target-car.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetUserModel {
  @MapFromSource(source => source.name1, { groups: ['customer'] })
  public firstName!: string;

  @MapFromSource(source => source.name2, { groups: ['customer'] })
  public lastName!: string;

  @PropertyType(TargetAddressModel)
  @MapFromSource(source => source.address1, { groups: ['customer'] })
  public address!: TargetAddressModel;

  @PropertyType(TargetCarModel)
  @MapFromSource(source => source.car1, { groups: ['customer'] })
  public cars!: TargetCarModel[];
}
