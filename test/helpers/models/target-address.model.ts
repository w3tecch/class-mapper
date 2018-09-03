import { SourceAddressModel } from './source-address.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetAddressModel {
  @MapFromSource((source: SourceAddressModel) => source.addressLine1, { groups: ['customer'] })
  public street!: string;

  @MapFromSource((source: SourceAddressModel) => source.addressLine2, { groups: ['customer'] })
  public houseNumber!: string;

  @MapFromSource((source: SourceAddressModel) => parseInt(source.addressLine3, 10), { groups: ['customer'] })
  public zip!: number;

  @MapFromSource((source: SourceAddressModel) => source.addressLine4, { groups: ['customer'] })
  public city!: string;
}
