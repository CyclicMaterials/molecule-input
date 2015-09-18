import assign from 'fast.js/object/assign';

function handleValueAndValidate(value, isAutoValidating, inputElement) {
  if (isAutoValidating) {
    let isValid = inputElement.checkValidity();

    return !isValid;
  }
}

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.isFocused$,
    actions.isBlurred$,
    actions.value$,
    actions.inputElement$,
    (props, isFocused, isBlurred, value, inputElement) => {
      const {isAutoValidating} = props;

      const isInvalid = value !== `` || isBlurred ?
        handleValueAndValidate(value, isAutoValidating, inputElement) :
        false;

      return assign({}, props, {dialogueName, isFocused, value, isInvalid});
    }
  );
}

export default model;
