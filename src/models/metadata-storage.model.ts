import find from 'lodash-es/find';
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
    const mapFromSource = this.mapFromSource.filter(m => m.target === target);

    return mapFromSource.length
      ? [...this.getMapFromSource(Object.getPrototypeOf(target)), ...mapFromSource]
      : mapFromSource;
  }

  public addPropertyType(propertyType: PropertyTypeModel): void {
    this.propertyTypes.push(propertyType);
  }

  public getPropertyType(target: {}, propertyKey: string): PropertyTypeModel | undefined {
    return find(this.propertyTypes, p => p.target === target && p.propertyKey === propertyKey);
  }

  public clear(): void {
    this.mapFromSource = [];
    this.propertyTypes = [];
  }
}
