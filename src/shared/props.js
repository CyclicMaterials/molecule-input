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

  autocorrect: {
    type: string,
    default: `off`,
  },

  autofocus: {
    type: boolean,
    default: false,
  },

  charCounter: {
    type: boolean,
    default: false,
  },

  errorMessage: string,

  isDisabled: {
    type: boolean,
    default: false,
  },

  isInvalid: {
    type: boolean,
    default: false,
  },

  label: string,

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
