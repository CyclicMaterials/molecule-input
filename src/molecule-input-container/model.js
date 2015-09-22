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
      const {autoValidate, validate, type, noLabelFloat, persistLabelFloat} =
        props;

      const isInvalid = (value !== `` || blurred) &&
      autoValidate || validate && inputElement ?
        handleValidate(inputElement) :
        false;

      // type="number" hack needed because value is empty until it’s valid.
      // See issue #25.
      const inputHasContent = value || value === 0 ||
        inputElement && type === `number` && handleValidate(inputElement);

      const floatLabel = !noLabelFloat && inputHasContent || persistLabelFloat;

      const hideLabel = noLabelFloat && inputHasContent;

      return assign({},
        props,
        {
          dialogueName,
          focused,
          value,
          isInvalid,
          floatLabel,
          hideLabel,
        });
    }
  );
}

export default model;
