import { PropertyTypeModel } from '../models/property-type.model';
import { metadataStorage } from '../storage/storage';

/**
 * This decorator defines property type which is needed for nested structures
 * @param propertyType Type of property
 */
export const PropertyType = (propertyType: {}) => {
  return (target: {}, propertyKey: string) => {
    const metadata = new PropertyTypeModel(target.constructor, propertyKey, propertyType);
    metadataStorage.addPropertyType(metadata);
  };
};
