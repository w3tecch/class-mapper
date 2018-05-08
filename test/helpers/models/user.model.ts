import { MapFromSource } from '../../../src/decorators/map-from-source.decorator';

export class UserModel {
  @MapFromSource(source => source.name1, { toPlainOnly: true, toClassOnly: true, })
  public firstName!: string;

  @MapFromSource(source => source.name2, { toPlainOnly: true, toClassOnly: true })
  public lastName!: string;
}
