import { TargetAddressModel } from './target-address.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetUserModel {
  @MapFromSource(source => source.name1, { groups: ['customer'] })
  public firstName!: string;

  @MapFromSource(source => source.name2, { groups: ['customer'] })
  public lastName!: string;

  @MapFromSource(source => source.address1, { type: TargetAddressModel, groups: ['customer'] })
  public address!: TargetAddressModel;
}
