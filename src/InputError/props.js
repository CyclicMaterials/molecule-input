import {string, boolean} from 'categories-js';

const props = {
  isInvalid: {
    type: boolean,
    default: false,
  },

  errorMessage: {
    type: string,
    default: ``,
  },
};

export default props;
