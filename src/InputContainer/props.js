import {array, boolean, func, nonnegativeInteger, object, string}
  from 'categories-js';

const props = {
  addOns: array,

  allowedPattern: string,

  autoCorrect: {
    type: string,
    default: `off`,
  },

  autoSave: string,

  autoValidate: {
    type: boolean,
    default: false,
  },

  charCounter: {
    type: boolean,
    default: false,
  },

  disableLabelFloat: {
    type: boolean,
    default: false,
  },

  errorMessage: string,

  bindValue: string,

  label: object,

  input: object,

  inputMode: string,

  minLength: nonnegativeInteger,

  persistLabelFloat: {
    type: boolean,
    default: false,
  },

  prefix: string,

  preventInvalidInput: boolean,

  resultsCount: nonnegativeInteger,

  suffix: string,

  validate: {
    type: boolean,
    default: false,
  },

  validator: func,
};

export default props;
