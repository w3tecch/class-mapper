import { metadataStorage } from '../../../src/storage/storage';
import { customerModelTarget, mapFromSourceModelFirstName } from '../../helpers/entities/map-from-source';

beforeAll(() => {
  metadataStorage.clear();
});

describe('metaDataStorage', () => {
  test('must have addMapFromSource method', () => {
    expect(metadataStorage.addMapFromSource).toBeDefined();
  });

  test('must have getMapFromSource method', () => {
    expect(metadataStorage.getMapFromSource).toBeDefined();
  });

  test('addMapFromSource method must save and load metadata to storage', () => {
    metadataStorage.addMapFromSource(mapFromSourceModelFirstName);
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(customerModelTarget);

    expect(mapFromSourceMetadata).toEqual([mapFromSourceModelFirstName]);
  });

  test('clear method must remove all metadata', () => {
    metadataStorage.clear();
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(customerModelTarget);

    expect(mapFromSourceMetadata).toEqual([]);
  });
});
