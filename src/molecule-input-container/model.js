import assign from 'fast.js/object/assign';

function handleValidate(inputElement) {
  return !inputElement.checkValidity();
}

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.focused$,
    actions.blurred$,
    actions.value$,
    actions.inputElement$,
    (...args) => {
      const [props, focused, blurred, value, inputElement] = args;
      const {autoValidate, validate} = props;

      const isInvalid =
        (value !== `` || blurred) && autoValidate || validate ?
          handleValidate(inputElement) :
          false;

      return assign({}, props, {dialogueName, focused, value, isInvalid});
    }
  );
}

export default model;
