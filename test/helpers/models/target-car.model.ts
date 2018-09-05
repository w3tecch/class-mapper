import { SourceCarModel } from './source-car.model';
import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class TargetCarModel {
  @MapFromSource((source: SourceCarModel) => source.attribute1, { groups: ['customer'] })
  public manufacturer!: string;

  @MapFromSource((source: SourceCarModel) => source.attribute2, { groups: ['customer'] })
  public model!: string;
}
