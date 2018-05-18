import { PropertyMetadataModel } from './property-metadata.model';
import { IMapClass } from '../interfaces/map-class.interface';

/**
 * @ignore
 * model to store metadata of Type decorator
 */
export class PropertyTypeModel extends PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
    public propertyType: IMapClass<any>
  ) {
    super(target, propertyKey);
  }
}
