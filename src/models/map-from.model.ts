/**
 * model to store metadata of MapFrom decorator
 */
export class MapFromModel {
  constructor(
    public target: {},
    public propertyKey: string,
    public path: string,
  ) { }
}
