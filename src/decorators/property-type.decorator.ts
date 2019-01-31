import { IPropertyTypeOptions } from '../interfaces/property-type-options.interface';
import { PropertyTypeModel } from '../models/property-type.model';
import { metadataStorage } from '../storage/storage';
import { TMapClass } from '../types';

/**
 * This decorator defines property type which is needed for nested structures
 * @param propertyType Type of property
 */
export const PropertyType = (propertyType: TMapClass<any>, options?: IPropertyTypeOptions) => {
  return (target: {}, propertyKey: string) => {
    const metadata = new PropertyTypeModel(target.constructor, propertyKey, propertyType, options);
    metadataStorage.addPropertyType(metadata);
  };
};
