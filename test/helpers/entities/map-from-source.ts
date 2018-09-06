import { IMapOptions } from '../../../src/interfaces/map-options.interface';
import { MapFromSourceModel } from '../../../src/models/map-from-source.model';
import { TargetCustomerModel } from '../models/target-customer.model';

/**
 * map from source model
 */

export const customerModelTarget = new TargetCustomerModel().constructor;

const options: IMapOptions = { groups: ['customer'] };

const addressOptions: IMapOptions = Object.assign(options);

const carOptions: IMapOptions = Object.assign(options);

export const mapFromSourceModelFirstName = new MapFromSourceModel(
  customerModelTarget,
  'firstName',
  source => source.name1,
  options
);

const mapFromSourceModelLastName = new MapFromSourceModel(
  customerModelTarget,
  'lastName',
  source => source.name2,
  options
);

const mapFromSourceModelPet = new MapFromSourceModel(
  customerModelTarget,
  'pets',
  source => source.name1,
  options
);

const mapFromSourceModelAddress = new MapFromSourceModel(
  customerModelTarget,
  'address',
  source => source.address1,
  addressOptions
);

const mapFromSourceModelCar = new MapFromSourceModel(
  customerModelTarget,
  'cars',
  source => source.car,
  carOptions
);

export const mapFromSourceModels = [
  mapFromSourceModelFirstName,
  mapFromSourceModelLastName,
  mapFromSourceModelPet,
  mapFromSourceModelAddress,
  mapFromSourceModelCar
];
