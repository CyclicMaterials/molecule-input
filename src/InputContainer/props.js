import {array, boolean, func, object, string} from 'categories-js';

const props = {
  addOns: {
    type: array,
    default: [],
  },

  //allowedPattern: string,
  //
  //autoSave: string,

  autoValidate: {
    type: boolean,
    default: false,
  },

  disableLabelFloat: {
    type: boolean,
    default: false,
  },

  bindValue: string,

  label: object,

  input: object,

  //inputMode: string,

  //minLength: nonnegativeInteger,

  persistLabelFloat: {
    type: boolean,
    default: false,
  },

  prefix: string,

  //preventInvalidInput: boolean,
  //
  //resultsCount: nonnegativeInteger,

  suffix: string,

  validate: {
    type: boolean,
    default: false,
  },

  validator: func,
};

export default props;
