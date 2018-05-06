/**
 * model to store metadata of MapTo decorator
 */
export class MapToModel {
  constructor(
    public target: () => void,
    public propertyName: string,
    public path: string) { }
}
