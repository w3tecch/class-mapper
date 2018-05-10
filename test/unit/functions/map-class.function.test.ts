import { mapClasses } from '../../../src/functions/map-classes.function';
import { metadataStorage } from '../../../src/storage/storage';
import { mapFromSourceModels, target } from '../../helpers/entities/map-from-source';
import { sourceUser } from '../../helpers/entities/user';
import { TargetUserModel } from '../../helpers/models/target-user.model';

describe('mapClasses', () => {
  test('must return metadata from storage', () => {
    const bubu = mapClasses(sourceUser, TargetUserModel);

    const mapFromSourceMetadata = metadataStorage.getMapFromSource(target);

    expect(bubu).toBeDefined();
    expect(JSON.stringify(mapFromSourceMetadata)).toBe(JSON.stringify(mapFromSourceModels));
  });
});
