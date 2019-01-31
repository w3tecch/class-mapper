import { PropertyMetadataModel } from './property-metadata.model';
import { IPropertyTypeOptions } from '../interfaces/property-type-options.interface';
import { TMapClass } from '../types';

/**
 * model to store metadata of Type decorator
 */
export class PropertyTypeModel extends PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
    public propertyType: TMapClass<any>,
    public options?: IPropertyTypeOptions
  ) {
    super(target, propertyKey);
  }
}
