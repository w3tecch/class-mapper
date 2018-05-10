import * as _ from 'lodash';
import { IMapClass } from '../interfaces/map-class.interface';
import { IMapOptions } from '../interfaces/map-options.interface';
import { MapFromSourceModel } from '../models/map-from-source.model';
import { metadataStorage } from '../storage/storage';

export class ClassMapper<T, U> {
  private mapFromSourceMetadata: MapFromSourceModel<{}>[];
  private targetModel: U;

  constructor(
    private sourceClass: T,
    public targetClass: IMapClass<U>,
    private options?: IMapOptions
  ) {
    this.mapFromSourceMetadata = metadataStorage.getMapFromSource(sourceClass.constructor);
    this.targetModel = new targetClass();
  }

  public mapClasses(): U {
    this.executeMapFunctions();

    return this.targetModel;
  }

  private executeMapFunctions(): void {
    this.mapFromSourceMetadata.forEach(metadata => {
      if (this.checkGroups(metadata.options)) {
        this.targetModel[metadata.propertyKey] = metadata.mapFunction(this.sourceClass);
      }
    });
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
      transFromProperty = _.includes(metadataOptions.groups, group);

      if (transFromProperty) {
        break;
      }
    }

    return transFromProperty;
  }
}
