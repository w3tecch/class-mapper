import { metadataStorage } from '../../../src/storage/storage';
import { customerModelTarget, mapFromSourceModels } from '../../helpers/entities/map-from-source';
import { TargetCustomerModel } from '../../helpers/models/target-customer.model';

describe('MapFromSource decorator', () => {
  test('must store metadata after customer class is declared', () => {
    const mapFromSourceMetadata = metadataStorage.getMapFromSource(customerModelTarget);

    expect(JSON.stringify(mapFromSourceMetadata)).toBe(JSON.stringify(mapFromSourceModels));
  });
});
