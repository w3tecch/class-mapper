import { PropertyMetadataModel } from './property-metadata.model';
import { IMapOptions } from '../interfaces/map-options.interface';

export type TMapFunction = (source: any) => any;

/**
 * model to store metadata of MapFrom decorator
 */
export class MapFromSourceModel extends PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
    public mapFunction: TMapFunction,
    public options?: IMapOptions
  ) {
    super(target, propertyKey);
  }
}
