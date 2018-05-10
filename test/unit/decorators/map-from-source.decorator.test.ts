import { metadataStorage } from '../../../src/storage/storage';
import { mapFromSourceModels, target } from '../../helpers/entities/map-from-source';
import { TargetUserModel } from '../../helpers/models/target-user.model';

describe('MapFromSource decorator', () => {
  test('must store metadata after new instance of class is created', () => {
    const targetUser = new TargetUserModel();
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(target);

    expect(targetUser).toBeDefined();
    expect(JSON.stringify(mapFromSourceMetadata)).toBe(JSON.stringify(mapFromSourceModels));
  });
});
