import { TPropertyDecorator } from './helpers';
import { MapToModel } from '../models/map-to.model';
import { metadataStorage } from '../storage/storage';

/**
 * set target path to attribute in clean model
 * @param path path to target attribute in clean model
 */
export function MapTo(path: string): TPropertyDecorator {
  return (target, propertyName: string, descriptor: PropertyDescriptor): void => {
    const mapTo = new MapToModel(target, propertyName, path);
    metadataStorage.addMapTo(mapTo);
  };
}
