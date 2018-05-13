import { IMapOptions } from '../../../src/interfaces/map-options.interface';
import { MapFromSourceModel } from '../../../src/models/map-from-source.model';
import { TargetUserModel } from '../models/target-user.model';

/**
 * map from source model
 */

export const target = new TargetUserModel().constructor;
const options: IMapOptions = { groups: ['customer'] };

export const mapFromSourceModelFirstName = new MapFromSourceModel(
  target,
  'firstName',
  source => source.name1,
  options
);

const mapFromSourceModelLastName = new MapFromSourceModel(
  target,
  'lastName',
  source => source.name2,
  options
);

export const mapFromSourceModels = [
  mapFromSourceModelFirstName,
  mapFromSourceModelLastName
];
