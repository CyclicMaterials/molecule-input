import assign from 'fast.js/object/assign';

function validateValue(value, inputElement, validator) {
  return validator ?
    !validator(value) :
    inputElement && !inputElement.checkValidity();
}

function handleValidation(
  {value, lostFocus, autoValidate, validate, inputElement, validator}
) {
  const shouldValidate = (value !== `` || lostFocus) &&
    autoValidate || validate;

  return shouldValidate ?
    validateValue(value, inputElement, validator) :
    false;
}

function model({props$, actions, layout, dialogueName}) {
  return props$.combineLatest(
    actions.focused$,
    actions.blurred$,
    actions.value$,
    layout.inputElement$,
    layout.floatLabelOffsetLeft$,
    (props, ...items) => {
      const [focused, lostFocus, value, inputElement, floatLabelOffsetLeft] =
        items;

      const {
        autoValidate,
        bindValue,
        disableLabelFloat,
        persistLabelFloat,
        validate,
        validator} = props;

      const workingValue = bindValue || value;

      const isInvalid = handleValidation({
        value: workingValue,
        lostFocus,
        autoValidate,
        validate,
        inputElement,
        validator,
      });

      // type="number" hack needed because value is empty until it’s valid.
      // See issue #25.
      const inputHasContent = workingValue || workingValue === 0 ||
        inputElement && inputElement.type === `number` &&
        !inputElement.checkValidity();

      const floatLabel =
        !disableLabelFloat && inputHasContent || persistLabelFloat;

      const labelLeft = floatLabel ? floatLabelOffsetLeft : `left: 0;`;

      const hideLabel = disableLabelFloat && inputHasContent;

      return assign({},
        props,
        {
          dialogueName,
          focused,
          value: workingValue,
          isInvalid,
          floatLabel,
          labelLeft,
          hideLabel,
        });
    }
  );
}

export default model;
