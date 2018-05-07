import { MapFromModel } from './map-from.model';

/**
 * model to store all metadata of decorators
 */
export class MetadataStorageModel {
  private mapTo: MapFromModel[] = [];

  public addMapFrom(mapFrom: MapFromModel) {
    this.mapTo.push(mapFrom);
  }

  public getMapFrom(target: {}): MapFromModel[] {
    return this.mapTo.filter(m => m.target === target);
  }

  public clear(): void {
    this.mapTo = [];
  }
}
