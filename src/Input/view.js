/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
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
    }) => {
      return (// eslint-disable-line
        <div className={`${id} ${componentName}`}>
          <input
            attributes={{
              maxlength: maxLength,
              readonly,
            }}
            autocapitalize={autocapitalize}
            autocomplete={autocomplete}
            autofocus={autofocus}
            className={`${componentName}_input`}
            data-hook={new ControlledInputHook(value)}
            disabled={isDisabled}
            invalid={isInvalid}
            list={list}
            max={max}
            min={min}
            name={name}
            pattern={pattern}
            placeholder={placeholder}
            required={required}
            size={size}
            step={step}
            type={type}/>
        </div>
      );
    }
  );
}

export default view;
