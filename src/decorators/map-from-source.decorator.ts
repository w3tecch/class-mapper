import { TransformOptions } from 'class-transformer';
import { MapFromSourceModel, TMapFunction } from '../models/map-from-source.model';
import { metadataStorage } from '../storage/storage';

/**
 * Defines a custom logic for structure mapping
 * @param mapFunction Function to map from source to current value
 * @param options Mapping options
 */
export function MapFromSource(mapFunction: TMapFunction, options?: TransformOptions) {
  return (target: any, propertyKey: string) => {
    const metadata = new MapFromSourceModel(target.constructor, propertyKey, mapFunction, options);
    metadataStorage.addMapFromSource(metadata);
  };
}
