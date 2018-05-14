import { MapFromSourceModel } from './map-from-source.model';
import { PropertyTypeModel } from './property-type.model';

/**
 * model to store all metadata of decorators
 */
export class MetadataStorageModel {
  private mapFromSource: MapFromSourceModel[] = [];
  private propertyTypes: PropertyTypeModel[] = [];

  public addMapFromSource(mapFromSource: MapFromSourceModel) {
    this.mapFromSource.push(mapFromSource);
  }

  public getMapFromSource(target: {}): MapFromSourceModel[] {
    return this.mapFromSource.filter(m => m.target === target);
  }

  public addPropertyType(propertyType: PropertyTypeModel): void {
    this.propertyTypes.push(propertyType);
  }

  public getPropertyType(target: {}, propertyKey: string): PropertyTypeModel | undefined {
    return this.propertyTypes.find(p => p.target === target && p.propertyKey === propertyKey);
  }

  public clear(): void {
    this.mapFromSource = [];
    this.propertyTypes = [];
  }
}
