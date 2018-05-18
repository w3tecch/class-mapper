/**
 * @ignore
 * model to store metadata of property decorators
 */
export abstract class PropertyMetadataModel {
  constructor(
    public target: Function,
    public propertyKey: string,
  ) { }
}
