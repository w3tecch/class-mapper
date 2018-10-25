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
    const targetPrototype = Object.getPrototypeOf(target);

    return targetPrototype
      ? [...this.getMapFromSource(targetPrototype), ...mapFromSource]
      : mapFromSource;
  }

  public addPropertyType(propertyType: PropertyTypeModel): void {
    this.propertyTypes.push(propertyType);
  }

  public getPropertyTypes(target: {}, propertyKey: string): PropertyTypeModel[] | undefined {
    const targetProtoTypes = this.flattenNestedTargets(target);
    let propertyTypes: PropertyTypeModel[] | undefined;

    for (const targetPrototype of targetProtoTypes) {
      propertyTypes = this.propertyTypes.filter(p => p.target === targetPrototype && p.propertyKey === propertyKey);

      if (propertyTypes && propertyTypes.length) { break; }
    }

    return propertyTypes;
  }

  public clear(): void {
    this.mapFromSource = [];
    this.propertyTypes = [];
  }

  private flattenNestedTargets(target: {}): {}[] {
    const targetPrototypes = [target];
    const targetPrototype = Object.getPrototypeOf(target);

    return targetPrototype
      ? [...this.flattenNestedTargets(targetPrototype), ...targetPrototypes]
      : targetPrototypes;
  }
}
