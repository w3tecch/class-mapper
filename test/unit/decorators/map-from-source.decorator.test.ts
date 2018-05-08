import { plainToClass } from 'class-transformer';
import { metadataStorage } from '../../../src/storage/storage';
import { mapFromSourceModels, target } from '../../helpers/entities/map-from-source';
import { userModel as expectedUserModel, userPlain } from '../../helpers/entities/user';
import { UserModel } from '../../helpers/models/user.model';

describe('MapFromSource decorator', () => {
  test('must store metadata after new instance of class is created', () => {
    const userModel = new UserModel();
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(target);

    expect(userModel).toBeDefined();
    expect(JSON.stringify(mapFromSourceMetadata)).toBe(JSON.stringify(mapFromSourceModels));
  });

  test.skip('', () => {
    const userModel = plainToClass(UserModel, userPlain);

    expect(userModel).toBe(expectedUserModel);
  });
});
