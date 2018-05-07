import { MapTo } from '../dist/class-mapper';

export class UglyUser {
  @MapTo('firstName')
  public name1: string = 'John';

  @MapTo('lastName')
  public name3: string = 'Doe';
}
