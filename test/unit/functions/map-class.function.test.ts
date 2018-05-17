import { mapClasses } from '../../../src/functions/map-classes.function';
import { sourceCustomer, targetCustomer as expectedTargetCustomer } from '../../helpers/entities/customer';
import { TargetCustomerModel } from '../../helpers/models/target-customer.model';

describe('mapClasses', () => {
  test('must return mapped class with one group assigned', () => {
    const targetCustomer = mapClasses(sourceCustomer, TargetCustomerModel, { groups: ['customer'] });

    expect(targetCustomer).toEqual(expectedTargetCustomer);
  });
});
