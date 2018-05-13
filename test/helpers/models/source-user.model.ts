import { SourceAddressModel } from './source-address.model';
import { SourceCarModel } from './source-car.model';

export class SourceUserModel {
  public name1!: string;
  public name2!: string;
  public address1!: SourceAddressModel;
  public car1!: SourceCarModel[];
}
