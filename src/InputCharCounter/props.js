import {string, nonnegativeInteger} from 'categories-js';

const props = {
  value: {
    type: string,
    default: ``,
  },

  maxLength: nonnegativeInteger,
};

export default props;
