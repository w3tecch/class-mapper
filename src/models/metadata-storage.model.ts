import { MapFromSourceModel } from './map-from-source.model';

/**
 * model to store all metadata of decorators
 */
export class MetadataStorageModel {
  private mapFromSource: MapFromSourceModel[] = [];

  public addMapFromSource(mapFromSource: MapFromSourceModel) {
    this.mapFromSource.push(mapFromSource);
  }

  public getMapFromSource(target: {}): MapFromSourceModel[] {
    return this.mapFromSource.filter(m => m.target === target);
  }

  public clear(): void {
    this.mapFromSource = [];
  }
}
