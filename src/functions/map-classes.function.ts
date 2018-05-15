import { ClassMapper } from '../classes/class-mapper.class';
import { IMapClass } from '../interfaces/map-class.interface';
import { IMapOptions } from '../interfaces/map-options.interface';

export interface IMapClassOptions {
  groups?: string[];
}

/**
 * Maps your source class in your target class
 * @param sourceClass Source model
 * @param targetClass Target model type
 * @param options Mapping options
 */
export const mapClasses = <T, U>(sourceClass: T, targetClass: IMapClass<U>, options?: IMapOptions): U => {
  const classMapper = new ClassMapper<T, U>(sourceClass, targetClass, options);

  return classMapper.mapClasses();
};
