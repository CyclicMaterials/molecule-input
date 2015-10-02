import {func, string, boolean, nonnegativeInteger} from 'categories-js';

const props = {
  label: string,

  value: string,

  isDisabled: {
    type: boolean,
    default: false,
  },

  isInvalid: {
    type: boolean,
    default: false,
  },

  preventInvalidInput: boolean,

  allowedPattern: string,

  type: string,

  list: string,

  pattern: string,

  required: boolean,

  errorMessage: string,

  charCounter: {
    type: boolean,
    default: false,
  },

  disableLabelFloat: {
    type: boolean,
    default: false,
  },

  persistLabelFloat: {
    type: boolean,
    default: false,
  },

  autoValidate: {
    type: boolean,
    default: false,
  },

  validator: func,

  autoComplete: {
    type: string,
    default: `off`,
  },

  autoFocus: boolean,

  inputMode: string,

  maxLength: nonnegativeInteger,

  min: string,

  max: string,

  step: string,

  name: string,

  placeholder: string,

  readonly: boolean,

  size: nonnegativeInteger,

  autoCapitalize: {
    type: string,
    default: `none`,
  },

  autoCorrect: {
    type: string,
    default: `off`,
  },

  autoSave: string,

  resultsCount: nonnegativeInteger,
};

export default props;
