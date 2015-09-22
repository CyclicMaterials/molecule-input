import assign from 'fast.js/object/assign';

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

      let isInvalid = false;

      const handleValidation = (workingValue !== `` || blurred) &&
        autoValidate || validate && inputElement;

      if (handleValidation && validator) {
        isInvalid = !validator(workingValue);
      } else if (handleValidation) {
        isInvalid = !inputElement.checkValidity();
      }

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
