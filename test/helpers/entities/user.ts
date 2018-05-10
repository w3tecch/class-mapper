import { SourceUserModel } from '../models/source-user.model';
import { TargetUserModel } from '../models/target-user.model';

/**
 * plain user structure
 */

const userPlain = {
  name1: 'John',
  name2: 'Doe'
};

/**
 * source user model
 */
export const sourceUser = new SourceUserModel();

sourceUser.name1 = userPlain.name1;
sourceUser.name1 = userPlain.name2;

/**
 * target user model
 */

export const targetUser = new TargetUserModel();

targetUser.firstName = userPlain.name1;
targetUser.lastName = userPlain.name2;
