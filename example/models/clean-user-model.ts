import { MapFrom } from '../../dist/class-mapper.js';

export class CleanUserModel {
  @MapFrom('name1')
  public firstName!: string;

  @MapFrom('name2')
  public lastName: string;
}
