import { MapToModel } from './map-to.model';

/**
 * model to store all metadata of decorators
 */
export class MetadataStorageModel {
  private mapTo: MapToModel[] = [];

  public addMapTo(mapTo: MapToModel) {
    this.mapTo.push(mapTo);
  }

  public clear(): void {
    this.mapTo = [];
  }
}
