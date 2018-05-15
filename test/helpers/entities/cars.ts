import { SourceCarModel } from '../models/source-car.model';
import { TargetCarModel } from '../models/target-car.model';

/**
 * plain cars structure
 */

const carsPlain = [
  {
    attribute1: 'Chevrolet',
    attribute2: 'Camaro'
  },
  {
    attribute1: 'Ford',
    attribute2: 'Mustang'
  },
];

/**
 * source cars model
 */

export const sourceCars = carsPlain.map(carPlain => {
  const sourceCar = new SourceCarModel();
  sourceCar.attribute1 = carPlain.attribute1;
  sourceCar.attribute2 = carPlain.attribute2;

  return sourceCar;
});

/**
 * target cars model
 */

export const targetCars = carsPlain.map(carPlain => {
  const targetCar = new TargetCarModel();
  targetCar.manufacturer = carPlain.attribute1;
  targetCar.model = carPlain.attribute2;

  return targetCar;
});
