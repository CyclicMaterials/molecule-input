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

function renderInputContent(state) {
  const {
    dialogueName,
    label,
    input,
    noFloatingLabel,
    focused,
    value} = state;

  const inputHasContent = !!value || value === 0;

  const floatLabel = !noFloatingLabel && inputHasContent;

  const inputContentClassMods = [];

  if (floatLabel) {
    inputContentClassMods.push(`isFloatingLabel`);
  }
  if (floatLabel && focused) {
    inputContentClassMods.push(`isHighlightedLabel`);
  }
  if (noFloatingLabel && inputHasContent) {
    inputContentClassMods.push(`isHiddenLabel`);
  }

  return (// eslint-disable-line
    <div
      className={combineClassNames(
        `${dialogueName}_inputContent`,
        inputContentClassMods,
        `atom-FlexLayout--horizontal`,
        `atom-FlexLayout--end`)}>
      <div
        className={combineClassNames(
          `${dialogueName}_labelAndInputContainer`,
          `atom-FlexLayout_flex`,
          `atom-Layout--relative`,
          `atom-Typography--subhead`)}>
        {label}
        {input}
      </div>
    </div>
  );
}

function renderUnderline(state) {
  const {dialogueName, focused, isInvalid} = state;

  let underlineClassMod = ``;

  if (isInvalid) {
    underlineClassMod = `isInvalid`;
  } else if (focused) {
    underlineClassMod = `isHighlighted`;
  }

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${dialogueName}_underline`,
      underlineClassMod)}>
      <div className={combineClassNames(
        `${dialogueName}_unfocusedLine`,
        `atom-Layout--fit`)}></div>
      <div className={combineClassNames(
        `${dialogueName}_focusedLine`,
        `atom-Layout--fit`)}></div>
    </div>
  );
}

function renderAddOns(state, addOns) {
  const {dialogueName, focused, isInvalid} = state;

  let addOnContentClassMod = ``;

  if (isInvalid) {
    addOnContentClassMod = `isInvalid`;
  } else if (focused) {
    addOnContentClassMod = `isHighlighted`;
  }

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${dialogueName}_addOnContent`,
      addOnContentClassMod)}>
      {addOns}
    </div>
  );
}

function view({state$, id, addOns$}) {
  return state$.combineLatest(
    addOns$,
    (state, addOns) => {
      const {dialogueName, className, isDisabled} = state;

      const containerClassMod = isDisabled ? `isDisabled` : ``;

      return ( // eslint-disable-line
        <div className={combineClassNames(
          id, dialogueName, className, containerClassMod)}>
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
