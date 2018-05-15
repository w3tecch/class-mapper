import { SourceAddressModel } from '../models/source-address.model';
import { TargetAddressModel } from '../models/target-address.model';

/**
 * plain user structure
 */

const addressPlain = {
  addressLine1: 'Example Street',
  addressLine2: '12 AB',
  addressLine3: '1234',
  addressLine4: 'Example City',
};

/**
 * source address model
 */

export const sourceAddress = new SourceAddressModel();

sourceAddress.addressLine1 = addressPlain.addressLine1;
sourceAddress.addressLine2 = addressPlain.addressLine2;
sourceAddress.addressLine3 = addressPlain.addressLine3;
sourceAddress.addressLine4 = addressPlain.addressLine4;

/**
 * target address model
 */

export const targetAddress = new TargetAddressModel();

targetAddress.street = addressPlain.addressLine1;
targetAddress.houseNumber = addressPlain.addressLine2;
targetAddress.zip = parseInt(addressPlain.addressLine3, 10);
targetAddress.city = addressPlain.addressLine4;
