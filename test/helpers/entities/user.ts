import { UserModel } from '../models/user.model';

/**
 * plain user structure
 */

export const userPlain = {
  name1: 'John',
  name2: 'Doe'
};

/**
 * user model
 */

export const userModel = new UserModel();

userModel.firstName = userPlain.name1;
userModel.lastName = userPlain.name2;
