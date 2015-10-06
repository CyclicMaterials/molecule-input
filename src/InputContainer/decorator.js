import {clone} from 'ramda';

function hasInputContent(inputElement, value) {
  // type="number" hack needed because value is empty until it’s valid.
  // See issue #25.
  return value || value === 0 ||
    inputElement && inputElement.type === `number` &&
    !inputElement.checkValidity();
}

function styledLabel(state, labelLeft) {
  let label;

  if (state.prefix) {
    label = clone(state.label);

    const labelAttributes = label.properties.attributes =
      label.properties.attributes || {};

    labelAttributes.style =
      `${labelAttributes.style || ``};${labelLeft}`.replace(/^;/, ``);
  }

  return label || state.label;
}

function decorator({state$, layout, actions}) {
  return state$.combineLatest(
    actions.highlight$,
    layout.inputElement$,
    layout.floatLabelOffsetLeft$,
    (state, highlight, ...layoutItems) => {
      const [inputElement, floatLabelOffsetLeft] = layoutItems;
      const {
        value,
        disableLabelFloat,
        persistLabelFloat,
        isDisabled,
        isInvalid} = state;

      const inputHasContent = hasInputContent(inputElement, value);

      const floatLabel =
        !disableLabelFloat && inputHasContent || persistLabelFloat;

      const hideLabel = disableLabelFloat && inputHasContent;

      const classNameMods = [];

      if (isDisabled) {
        classNameMods.push(`is-disabled`);
      }
      if (floatLabel) {
        classNameMods.push(`is-floatedLabel`);
      }
      if (hideLabel) {
        classNameMods.push(`is-hiddenLabel`);
      }
      if (isInvalid) {
        classNameMods.push(`is-invalid`);
      }
      if (highlight) {
        classNameMods.push(`is-highlighted`);
      }

      const labelLeft = floatLabel ?
        floatLabelOffsetLeft :
        `left: 0;`;

      const label = styledLabel(state, labelLeft);

      return {
        classNameMods,
        label,
      };
    }
  );
}

export default decorator;
