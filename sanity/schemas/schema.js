import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import footerbanner from './footerbanner';
import viewed from './viewed';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, footerbanner, viewed]),
});
