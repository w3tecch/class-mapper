import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';
import { IMapClass } from '../interfaces/map-class.interface';
import { IMapOptions } from '../interfaces/map-options.interface';
import { MapFromSourceModel } from '../models/map-from-source.model';
import { metadataStorage } from '../storage/storage';
export class TargetAddressModel {
  @MapFromSource(source => source.addressLine1, { groups: ['customer'] })
  public street!: string;

  @MapFromSource(source => source.addressLine2, { groups: ['customer'] })
  public houseNumber!: string;

  @MapFromSource(source => source.addressLine3, { groups: ['customer'] })
  public zip!: number;

  @MapFromSource(source => source.addressLine4, { groups: ['customer'] })
  public city!: string;
}
