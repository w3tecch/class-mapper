import { sourceAddress, targetAddress } from './address';
import { sourceCars, targetCars } from './cars';
import { SourceCustomerModel } from '../models/source-customer.model';
import { TargetCustomerModel } from '../models/target-customer.model';

/**
 * plain customer structure
 */

const customerPlain = {
  name1: 'John',
  name2: 'Doe'
};

/**
 * source customer model
 */

export const sourceCustomer = new SourceCustomerModel();

sourceCustomer.name1 = customerPlain.name1;
sourceCustomer.name2 = customerPlain.name2;
sourceCustomer.address1 = sourceAddress;
sourceCustomer.car1 = sourceCars;

/**
 * target customer model
 */

export const targetCustomer = new TargetCustomerModel();

targetCustomer.firstName = sourceCustomer.name1;
targetCustomer.lastName = sourceCustomer.name2;
targetCustomer.address = targetAddress;
targetCustomer.cars = targetCars;
