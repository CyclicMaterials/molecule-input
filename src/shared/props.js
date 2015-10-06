import {boolean, nonnegativeInteger, string} from 'categories-js';

const props = {
  autocapitalize: {
    type: string,
    default: `none`,
  },

  autocomplete: {
    type: string,
    default: `off`,
  },

  autofocus: boolean,

  isDisabled: {
    type: boolean,
    default: false,
  },

  isInvalid: {
    type: boolean,
    default: false,
  },

  list: string,

  max: string,

  maxLength: nonnegativeInteger,

  min: string,

  name: string,

  pattern: string,

  placeholder: string,

  readonly: boolean,

  required: boolean,

  size: nonnegativeInteger,

  step: string,

  type: string,

  value: string,
};

export default props;
