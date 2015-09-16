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
    isNoFloatingLabel,
    isFocused,
    value} = state;

  const hasInputContent = !!value || value === 0;

  const isLabelFloating = !isNoFloatingLabel && hasInputContent;

  const inputContentClassMods = [];

  if (isLabelFloating) {
    inputContentClassMods.push(`isFloatingLabel`);
  }
  if (isLabelFloating && isFocused) {
    inputContentClassMods.push(`isHighlightedLabel`);
  }
  if (isNoFloatingLabel && hasInputContent) {
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
  const {dialogueName, isFocused} = state;

  const underlineClassMod = isFocused ? `isHighlighted` : ``;

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

function view({state$, id}) {
  return state$.map((state) => {
    const {dialogueName, className, isDisabled} = state;

    const containerClassMod = isDisabled ? `isDisabled` : ``;

    return ( // eslint-disable-line
      <div className={combineClassNames(
        id, dialogueName, className, containerClassMod)}>
        {renderFloatedLabelPlaceholder(state)}
        {renderInputContent(state)}
        {renderUnderline(state)}
      </div>
    );
  });
}

export default view;
