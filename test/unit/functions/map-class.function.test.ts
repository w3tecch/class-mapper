import { mapClasses } from '../../../src/functions/map-classes.function';
import {
  sourceCustomer,
  sourceCustomerNoCars,
  targetCustomer as expectedTargetCustomer,
  targetCustomerNoCars as expectedTargetCustomerNoCars
  } from '../../helpers/entities/customer';
import { TargetCustomerModel } from '../../helpers/models/target-customer.model';

describe('mapClasses', () => {
  test('must return mapped class with one group assigned', () => {
    const targetCustomer = mapClasses(sourceCustomer, TargetCustomerModel, { groups: ['customer'] });

    expect(targetCustomer).toEqual(expectedTargetCustomer);
  });

  test('must return mapped class with one group assigned and no cars', () => {
    const targetCustomerNoCars = mapClasses(sourceCustomerNoCars, TargetCustomerModel, { groups: ['customer'] });

    expect(targetCustomerNoCars).toEqual(expectedTargetCustomerNoCars);
  });
});
