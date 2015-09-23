import assign from 'fast.js/object/assign';
import udc from 'udc';

function validateValue(...args) {
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

function styleLabel(props, labelLeft) {
  let {label} = props;

  if (props.prefix) {
    label = udc(props.label);

    const labelAttributes = label.properties.attributes =
      label.properties.attributes || {};

    labelAttributes.style =
      `${labelAttributes.style || ``};${labelLeft}`.replace(/^;/, ``);
  }

  return label;
}

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.focused$,
    actions.blurred$,
    actions.value$,
    actions.inputElement$,
    actions.floatLabelOffsetLeft$,
    (props, ...actionItems) => {
      const [focused, blurred, value, inputElement, floatLabelOffsetLeft] =
        actionItems;

      const {
        autoValidate,
        validate,
        type,
        noLabelFloat,
        persistLabelFloat,
        bindValue,
        validator} = props;

      let workingValue = bindValue || value;

      const isInvalid = validateValue(
        workingValue, blurred, autoValidate, validate, inputElement, validator
      );

      // type="number" hack needed because value is empty until it’s valid.
      // See issue #25.
      const inputHasContent = workingValue || workingValue === 0 ||
        inputElement && type === `number` && !inputElement.checkValidity();

      const floatLabel = !noLabelFloat && inputHasContent || persistLabelFloat;

      const labelLeft = floatLabel ? floatLabelOffsetLeft : `left: 0;`;

      const hideLabel = noLabelFloat && inputHasContent;

      const label = styleLabel(props, labelLeft);

      const maxLength = props.maxLength ||
        inputElement && inputElement.maxlength;

      return assign({},
        props,
        {
          dialogueName,
          label,
          maxLength,
          focused,
          value,
          isInvalid,
          floatLabel,
          labelLeft,
          hideLabel,
        });
    }
  );
}

export default model;
