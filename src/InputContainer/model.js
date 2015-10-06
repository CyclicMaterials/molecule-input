import {merge} from 'ramda';

function isValueInvalid(value, inputElement, validator) {
  return validator ?
    !validator(value) :
    inputElement && !inputElement.checkValidity();
}

function model({props$, actions, layout, componentName}) {
  return props$.combineLatest(
    actions.lostHighlight,
    actions.inputValue$,
    layout.inputElement$,
    (props, ...items) => {
      const [lostHighlight, inputValue, inputElement] = items;
      const {autoValidate, bindValue, validate, validator} = props;
      const value = bindValue || inputValue;

      const shouldValidate = (value !== `` || lostHighlight) &&
        autoValidate || validate;

      const isInvalid = shouldValidate ?
        isValueInvalid(value, inputElement, validator) :
        false;

      return merge(props, {componentName, value, isInvalid});
    }
  ).distinctUntilChanged();
}

export default model;
