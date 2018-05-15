import { IMapOptions } from '../interfaces/map-options.interface';
import { MapFromSourceModel, TMapFunction } from '../models/map-from-source.model';
import { metadataStorage } from '../storage/storage';

/**
 * Defines a custom logic for structure mapping
 * @param mapFunction Function to map from source to current value
 * @param options Mapping options
 */
export const MapFromSource = (mapFunction: TMapFunction, options?: IMapOptions) => {
  return (target: {}, propertyKey: string) => {
    const metadata = new MapFromSourceModel(target.constructor, propertyKey, mapFunction, options);
    metadataStorage.addMapFromSource(metadata);
  };
};
