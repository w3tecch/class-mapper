import { CleanUserModel } from './models/clean-user-model';
import { UglyUserModel } from './models/ugly-user-model';
import { uglyToClean } from '../dist/class-mapper.js';

const uglyUser = new UglyUserModel();
uglyUser.name1 = 'John';
uglyUser.name2 = 'Doe';

const cleanUser = uglyToClean(uglyUser, CleanUserModel);

console.log('new clean user', cleanUser);
