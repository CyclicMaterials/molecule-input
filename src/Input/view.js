import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';
import ControlledInputHook from './../hooks/ControlledInputHook';

function view({state$, id}) {
  return state$.map(
    ({
      autocapitalize,
      autocomplete,
      autofocus,
      componentName,
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
    }) => h(`div`, {className: combineClassNames(id, componentName)},
      h(`input.${componentName}_input`, {
        attributes: {
          maxlength: maxLength,
          readonly,
        },
        autocapitalize: autocapitalize,
        autocomplete: autocomplete,
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
