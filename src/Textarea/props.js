import sharedProps from './../shared/props';
import {merge} from 'ramda';
import {nonnegativeInteger} from 'categories-js';

const props = merge(sharedProps, {
  maxRows: {
    type: nonnegativeInteger,
    default: 0,
  },

  rows: {
    type: nonnegativeInteger,
    default: 1,
  },
});

export default props;
