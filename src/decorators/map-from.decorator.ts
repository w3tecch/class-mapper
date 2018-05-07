import { TPropertyDecorator } from './helpers';
import { MapFromModel } from '../models/map-from.model';
import { metadataStorage } from '../storage/storage';

/**
 * set map path to ugly model attribute
 * @param path clean model attribute will get its value from this ugly model path
 */
export function MapFrom(path: string): TPropertyDecorator {
  return (target: {}, propertyKey: string) => {
    const mapFrom = new MapFromModel(target, propertyKey, path);
    metadataStorage.addMapFrom(mapFrom);
  };
}
