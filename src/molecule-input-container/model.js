import assign from 'fast.js/object/assign';

function handleValueAndValidation(...args) {
  const [
    workingValue, blurred, autoValidate, validate, inputElement, validator,
    ] = args;

  let isInvalid = false;

  const handleValidation = (workingValue !== `` || blurred) &&
    autoValidate || validate && inputElement;

  if (handleValidation && validator) {
    isInvalid = !validator(workingValue);
  } else if (handleValidation) {
    isInvalid = !inputElement.checkValidity();
  }

  return isInvalid;
}

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.focused$,
    actions.blurred$,
    actions.value$,
    actions.inputElement$,
    (props, ...actionItems) => {
      const [focused, blurred, value, inputElement] = actionItems;
      const {
        autoValidate,
        validate,
        type,
        noLabelFloat,
        persistLabelFloat,
        bindValue,
        validator} = props;

      let workingValue = bindValue || value;

      const isInvalid = handleValueAndValidation(
        workingValue, blurred, autoValidate, validate, inputElement, validator
      );

      // type="number" hack needed because value is empty until it’s valid.
      // See issue #25.
      const inputHasContent = workingValue || workingValue === 0 ||
        inputElement && type === `number` && !inputElement.checkValidity();

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
