/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function renderFloatedLabelPlaceholder(state) {
  const {dialogueName} = state;

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${dialogueName}_floatedLabelPlaceholder`,
      `atom-Typography--caption`)}>&nbsp;</div>
  );
}
import udc from 'udc';

function styleLabel(state) {
  let {label} = state;
  const {prefix, labelLeft} = state;

  if (prefix) {
    label = udc(state.label);

    const labelAttributes = label.properties.attributes =
      label.properties.attributes || {};

    labelAttributes.style =
      `${labelAttributes.style || ``};${labelLeft}`.replace(/^;/, ``);
  }

  return label;
}

function renderInputContent(state) {
  const {
    dialogueName,
    input,
    prefix,
    suffix} = state;

  const label = styleLabel(state);

  return (// eslint-disable-line
    <div
      className={combineClassNames(
        `${dialogueName}_inputContent`,
        `atom-FlexLayout--horizontal`,
        `atom-FlexLayout--end`)}>
      <div
        className={combineClassNames(
          `${dialogueName}_prefix`,
          `atom-Typography--subhead`)}>
        {prefix}
      </div>
      <div
        className={combineClassNames(
          `${dialogueName}_labelAndInputContainer`,
          `atom-FlexLayout_flex`,
          `atom-Layout--relative`,
          `atom-Typography--subhead`)}>
        {label}
        {input}
      </div>
      <div
        className={combineClassNames(
          `${dialogueName}_suffix`,
          `atom-Typography--subhead`)}>
        {suffix}
      </div>
    </div>
  );
}

function renderUnderline(state) {
  const {dialogueName} = state;

  return (// eslint-disable-line
    <div className={`${dialogueName}_underline`}>
      <div className={combineClassNames(
        `${dialogueName}_unfocusedLine`,
        `atom-Layout--fit`)}></div>
      <div className={combineClassNames(
        `${dialogueName}_focusedLine`,
        `atom-Layout--fit`)}></div>
    </div>
  );
}

function renderAddOns(state, ...addOns) {
  const {dialogueName} = state;

  return (// eslint-disable-line
    <div className={`${dialogueName}_addOnContent`}>
      {addOns}
    </div>
  );
}

function view({state$, id, addOns$}) {
  return state$.combineLatest(
    addOns$,
    (state, ...addOns) => {
      const {
        dialogueName,
        className,
        floatLabel,
        hideLabel,
        focused,
        isDisabled,
        isInvalid} = state;

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
      } else if (focused) {
        classNameMods.push(`is-highlighted`);
      }

      return ( // eslint-disable-line
        <div className={combineClassNames(
          id, dialogueName, className, classNameMods)}>
          {renderFloatedLabelPlaceholder(state)}
          {renderInputContent(state)}
          {renderUnderline(state)}
          {renderAddOns(state, addOns)}
        </div>
      );
    }
  );
}

export default view;
