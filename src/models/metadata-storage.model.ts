import { MapFromSourceModel } from './map-from-source.model';

/**
 * model to store all metadata of decorators
 */
export class MetadataStorageModel<T> {
  private mapFromSource: MapFromSourceModel<T>[] = [];

  public addMapFromSource(mapFromSource: MapFromSourceModel<T>) {
    this.mapFromSource.push(mapFromSource);
  }

  public getMapFromSource(target: {}): MapFromSourceModel<T>[] {
    return this.mapFromSource.filter(m => m.target === target);
  }

  public clear(): void {
    this.mapFromSource = [];
  }
}
