import { IMapOptions } from '../../../src/interfaces/map-options.interface';
import { MapFromSourceModel } from '../../../src/models/map-from-source.model';
import { TargetUserModel } from '../models/target-user.model';

/**
 * map from source model
 */

export const userModelTarget = new TargetUserModel().constructor;
const options: IMapOptions = { groups: ['customer'] };

export const mapFromSourceModelFirstName = new MapFromSourceModel(
  userModelTarget,
  'firstName',
  source => source.name1,
  options
);

const mapFromSourceModelLastName = new MapFromSourceModel(
  userModelTarget,
  'lastName',
  source => source.name2,
  options
);

const mapFromSourceModelAddress = new MapFromSourceModel(
  userModelTarget,
  'address',
  source => source.address1,
  options
);

export const mapFromSourceModels = [
  mapFromSourceModelFirstName,
  mapFromSourceModelLastName,
  mapFromSourceModelAddress
];
