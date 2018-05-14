import { PropertyMetadataModel } from './property-metadata.model';

/**
 * model to store metadata of Type decorator
 */
export class PropertyTypeModel extends PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
    public propertyType: {}
  ) {
    super(target, propertyKey);
  }
}
