import { metadataStorage } from '../../../src/storage/storage';
import { mapFromSourceModels, userModelTarget } from '../../helpers/entities/map-from-source';
import { TargetUserModel } from '../../helpers/models/target-user.model';

describe('MapFromSource decorator', () => {
  test('must store metadata after user class is declared', () => {
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(userModelTarget);

    expect(JSON.stringify(mapFromSourceMetadata)).toBe(JSON.stringify(mapFromSourceModels));
  });
});
