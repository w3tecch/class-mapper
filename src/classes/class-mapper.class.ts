import { IMapClass } from '../interfaces/map-class.interface';
import { IMapOptions } from '../interfaces/map-options.interface';
import { MapFromSourceModel } from '../models/map-from-source.model';
import { PropertyTypeModel } from '../models/property-type.model';
import { metadataStorage } from '../storage/storage';

export class ClassMapper<T, U> {
  private mapFromSourceMetadata: MapFromSourceModel[];
  private targetModel: U;

  constructor(
    private sourceClass: T,
    public targetClass: IMapClass<U>,
    private options?: IMapOptions
  ) {
    this.mapFromSourceMetadata = metadataStorage.getMapFromSource(targetClass);
    this.targetModel = new targetClass();
  }

  public mapClasses(): U {
    const mapFromSourceMetadata = this.filterMetadata();

    mapFromSourceMetadata.forEach(metadata => {
      const propertyTypeMetadata = metadataStorage.getPropertyType(this.targetClass, metadata.propertyKey);

      if (propertyTypeMetadata) {
        this.assignRecursive(metadata, propertyTypeMetadata);
      } else {
        this.assignValue(metadata);
      }
    });

    return this.targetModel;
  }

  private filterMetadata(): MapFromSourceModel[] {
    return this.mapFromSourceMetadata
      .filter(metadata => this.checkGroups(metadata.options))
      .filter(metadata => this.checkMapToggle(metadata.options));
  }

  private checkGroups(metadataOptions?: IMapOptions): boolean {
    /**
     * Check if property has assigned groups. If not, transform it
     */
    if (!metadataOptions || !metadataOptions.groups) {
      return true;
    }

    /**
     * Check if mapClasses function has passed groups. If not and property has assigned groups, do not transform it
     */
    if (!this.options || !this.options.groups) {
      return false;
    }

    /**
     * When property has assigned groups and groups are passed to mapClasses function, check if one of passed groups is assigned to property
     */
    let transFromProperty = false;

    for (const group of this.options.groups) {
      transFromProperty = metadataOptions.groups.indexOf(group) >= 0;

      if (transFromProperty) {
        break;
      }
    }

    return transFromProperty;
  }

  /**
   * Check if MapFromSource decorator is enabled
   * @param metadataOptions
   */
  private checkMapToggle(metadataOptions?: IMapOptions): boolean {
    return metadataOptions && metadataOptions.enabled
      ? metadataOptions.enabled(this.sourceClass)
      : true;
  }

  /**
   * Execute mapClasses function for nested object and array
   */
  private assignRecursive(mapFromSource: MapFromSourceModel, propertyType: PropertyTypeModel): void {
    const source = mapFromSource.mapFunction(this.sourceClass);

    this.targetModel[mapFromSource.propertyKey] = source instanceof Array
      ? source.map(s => new ClassMapper(s, propertyType.propertyType, this.options).mapClasses())
      : new ClassMapper(source, propertyType.propertyType, this.options).mapClasses();
  }

  private assignValue(metadata: MapFromSourceModel): void {
    this.targetModel[metadata.propertyKey] = metadata.mapFunction(this.sourceClass);
  }
}
