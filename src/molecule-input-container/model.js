import assign from 'fast.js/object/assign';

function handleValidate(inputElement) {
  return !inputElement.checkValidity();
}

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.isFocused$,
    actions.isBlurred$,
    actions.value$,
    actions.inputElement$,
    (...args) => {
      const [props, isFocused, isBlurred, value, inputElement] = args;
      const {isAutoValidating, validate} = props;

      const isInvalid =
        (value !== `` || isBlurred) && isAutoValidating || validate ?
          handleValidate(inputElement) :
          false;

      return assign({}, props, {dialogueName, isFocused, value, isInvalid});
    }
  );
}

export default model;
