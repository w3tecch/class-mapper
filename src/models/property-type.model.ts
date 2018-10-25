import { PropertyMetadataModel } from './property-metadata.model';
import { IMapClass } from '../interfaces/map-class.interface';
import { IPropertyTypeOptions } from '../interfaces/property-type-options.interface';

/**
 * model to store metadata of Type decorator
 */
export class PropertyTypeModel extends PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
    public propertyType: IMapClass<any>,
    public options?: IPropertyTypeOptions
  ) {
    super(target, propertyKey);
  }
}
