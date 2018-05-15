import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetCarModel {
  @MapFromSource(source => source.attribute1, { groups: ['customer'] })
  public manufacturer!: string;

  @MapFromSource(source => source.attribute2, { groups: ['customer'] })
  public model!: string;
}
