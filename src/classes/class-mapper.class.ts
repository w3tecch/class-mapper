import { mapClasses } from '../functions/map-classes.function';
import { IMapClass } from '../interfaces/map-class.interface';
import { IMapOptions } from '../interfaces/map-options.interface';
import { MapFromSourceModel } from '../models/map-from-source.model';
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
    const filteredMetadata = this.filterMetadata();

    filteredMetadata.forEach(metadata => {
      if (this.isNestedType(metadata)) {
        this.assignRecursive(metadata);
      } else {
        this.assignValue(metadata);
      }
    });

    return this.targetModel;
  }

  private filterMetadata(): MapFromSourceModel[] {
    return this.mapFromSourceMetadata.filter(metadata =>
      this.checkGroups(metadata.options));
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
   * Check if type to assign value is another deep nested object
   */
  private isNestedType(metadata: MapFromSourceModel): boolean {
    return metadata.options && metadata.options.type ? true : false;
  }

  /**
   * Execute mapClasses function for nested object and array
   */
  private assignRecursive(metadata: MapFromSourceModel): void {
    if (metadata.options && metadata.options.type) {
      const source = metadata.mapFunction(this.sourceClass);

      if (source instanceof Array) {
        this.targetModel[metadata.propertyKey] = source.map(s => mapClasses(s, metadata.options!.type!, this.options));
      } else {
        this.targetModel[metadata.propertyKey] = mapClasses(source, metadata.options.type, this.options);
      }
    }
  }

  private assignValue(metadata: MapFromSourceModel): void {
    this.targetModel[metadata.propertyKey] = metadata.mapFunction(this.sourceClass);
  }
}
