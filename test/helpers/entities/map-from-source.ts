import { TransformOptions } from 'class-transformer';
import { MapFromSourceModel } from '../../../src/models/map-from-source.model';
import { UserModel } from '../models/user.model';

/**
 * map from source model
 */

export const target = new UserModel().constructor;
const options: TransformOptions = { toPlainOnly: true, toClassOnly: true };

export const mapFromSourceModelFirstName = new MapFromSourceModel(
  target,
  'firstName',
  source => source.name1,
  options
);

export const mapFromSourceModelLastName = new MapFromSourceModel(
  target,
  'lastName',
  source => source.name2,
  options
);

export const mapFromSourceModels = [
  mapFromSourceModelFirstName,
  mapFromSourceModelLastName
];
