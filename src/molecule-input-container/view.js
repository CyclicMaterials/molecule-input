/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {DIALOGUE_NAME} from './index';
import combineClassNames from '@cyclic/util-combine-class-names';

function renderFloatedLabelPlaceholder() {
  return (// eslint-disable-line
    <div className={combineClassNames(
      `${DIALOGUE_NAME}_floatedLabelPlaceholder`,
      `atom-Typography--caption`)}>&nbsp;</div>
  );
}

function renderInputContent(state) {
  const {
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
        `${DIALOGUE_NAME}_inputContent`,
        inputContentClassMods,
        `atom-FlexLayout--horizontal`,
        `atom-FlexLayout--end`)}>
      <div
        className={combineClassNames(
          `${DIALOGUE_NAME}_labelAndInputContainer`,
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
  const underlineClassMod = state.isFocused ? `isHighlighted` : ``;

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${DIALOGUE_NAME}_underline`,
      underlineClassMod)}>
      <div className={combineClassNames(
        `${DIALOGUE_NAME}_unfocusedLine`,
        `atom-Layout--fit`)}></div>
      <div className={combineClassNames(
        `${DIALOGUE_NAME}_focusedLine`,
        `atom-Layout--fit`)}></div>
    </div>
  );
}

function view({state$, id}) {
  return state$.map((state) => {
    const {className, isDisabled} = state;

    const containerClassMod = isDisabled ? `isDisabled` : ``;

    return ( // eslint-disable-line
      <div className={combineClassNames(
        id, DIALOGUE_NAME, className, containerClassMod)}>
        {renderFloatedLabelPlaceholder()}
        {renderInputContent(state)}
        {renderUnderline(state)}
      </div>
    );
  });
}

export default view;
