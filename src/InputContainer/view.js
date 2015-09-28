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

function renderInputContent(state, decoration) {
  const {
    dialogueName,
    input,
    prefix,
    suffix} = state;

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
        {decoration.label}
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

function view({state$, id, decoration$, addOns$}) {
  return state$.combineLatest(
    decoration$,
    addOns$,
    (state, decoration, ...addOns) => {
      const {dialogueName, className} = state;

      const {classNameMods} = decoration;

      return ( // eslint-disable-line
        <div className={combineClassNames(
          id, dialogueName, className, classNameMods)}>
          {renderFloatedLabelPlaceholder(state)}
          {renderInputContent(state, decoration)}
          {renderUnderline(state)}
          {renderAddOns(state, addOns)}
        </div>
      );
    }
  );
}

export default view;
