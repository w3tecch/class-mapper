import { mapClasses } from '../../../src/functions/map-classes.function';
import { sourceUser, targetUser as expectedTargetUser } from '../../helpers/entities/user';
import { TargetUserModel } from '../../helpers/models/target-user.model';

describe('mapClasses', () => {
  test('must return metadata from storage with one group assigned', () => {
    const targetUser = mapClasses(sourceUser, TargetUserModel, { groups: ['customer'] });

    expect(targetUser).toEqual(expectedTargetUser);
  });
});
