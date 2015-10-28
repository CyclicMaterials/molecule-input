import {h} from '@cycle/dom';
import ControlledInputHook from './../hooks/ControlledInputHook';

function view({state$}) {
  return state$.map(
    ({
      autocapitalize,
      autocomplete,
      autocorrect,
      autofocus,
      componentClass,
      isDisabled,
      isInvalid,
      list,
      max,
      maxLength,
      min,
      name,
      pattern,
      placeholder,
      readonly,
      required,
      size,
      step,
      type,
      value,
    }) => h(`div.${componentClass}`,
      h(`input.${componentClass}_input`, {
        attributes: {
          maxlength: maxLength,
          readonly,
        },
        autocapitalize: autocapitalize,
        autocomplete: autocomplete,
        autocorrect: autocorrect,
        autofocus: autofocus,
        'data-hook': new ControlledInputHook(value),
        disabled: isDisabled,
        invalid: isInvalid,
        list: list,
        max: max,
        min: min,
        name: name,
        pattern: pattern,
        placeholder: placeholder,
        required: required,
        size: size,
        step: step,
        type: type,
      })
    ));
}

export default view;
