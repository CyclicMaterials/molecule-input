/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function renderFloatedLabelPlaceholder(state) {
  const {componentName} = state;

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${componentName}_floatedLabelPlaceholder`,
      `atom-Typography--caption`)}>&nbsp;</div>
  );
}

function renderInputContent(state, decoration) {
  const {
    componentName,
    input,
    prefix,
    suffix} = state;

  return (// eslint-disable-line
    <div
      className={combineClassNames(
        `${componentName}_inputContent`,
        `atom-FlexLayout--horizontal`,
        `atom-FlexLayout--end`)}>
      <div
        className={combineClassNames(
          `${componentName}_prefix`,
          `atom-Typography--subhead`)}>
        {prefix}
      </div>
      <div
        className={combineClassNames(
          `${componentName}_labelAndInputContainer`,
          `atom-FlexLayout_flex`,
          `atom-Layout--relative`,
          `atom-Typography--subhead`)}>
        {decoration.label}
        {input}
      </div>
      <div
        className={combineClassNames(
          `${componentName}_suffix`,
          `atom-Typography--subhead`)}>
        {suffix}
      </div>
    </div>
  );
}

function renderUnderline(state) {
  const {componentName} = state;

  return (// eslint-disable-line
    <div className={`${componentName}_underline`}>
      <div className={combineClassNames(
        `${componentName}_unfocusedLine`,
        `atom-Layout--fit`)}></div>
      <div className={combineClassNames(
        `${componentName}_focusedLine`,
        `atom-Layout--fit`)}></div>
    </div>
  );
}

function renderAddOns(state, ...addOns) {
  const {componentName} = state;

  return (// eslint-disable-line
    <div className={`${componentName}_addOnContent`}>
      {addOns}
    </div>
  );
}

function view({state$, id, decoration$, addOns$}) {
  return state$.combineLatest(
    decoration$,
    addOns$,
    (state, decoration, ...addOns) => {
      const {componentName, className} = state;

      const {classNameMods} = decoration;

      return ( // eslint-disable-line
        <div className={combineClassNames(
          id, componentName, className, classNameMods)}>
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
