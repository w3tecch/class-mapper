import { TargetAddressModel } from './target-address.model';
import { TargetCarModel } from './target-car.model';
import { TargetPersonModel } from './target-person.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';
import { PropertyType } from '../../../src/decorators/property-type.decorator';

export class TargetCustomerModel extends TargetPersonModel {
  @PropertyType(TargetAddressModel)
  @MapFromSource(source => source.address1, { groups: ['customer'] })
  public address!: TargetAddressModel;

  @PropertyType(TargetCarModel)
  @MapFromSource(source => source.car1, { groups: ['customer'] })
  public cars!: TargetCarModel[];
}
