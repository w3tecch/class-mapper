import { SourceAddressModel } from './source-address.model';
import { SourceCarModel } from './source-car.model';
import { SourcePersonModel } from './source-person.model';

export class SourceCustomerModel extends SourcePersonModel {
  public address1!: SourceAddressModel;
  public car1!: SourceCarModel[];
}
