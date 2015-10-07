/** @jsx hJSX */

import combineClassNames from '@cyclic/util-combine-class-names';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

function renderFloatedLabelPlaceholder(state) {
  const {componentName} = state;

  return (// eslint-disable-line
    <div className={combineClassNames(
      `${componentName}_floatedLabelPlaceholder`,
      `atom-Typography--caption`)}>&nbsp;</div>
  );
}

function renderPrefix(state) {
  const {componentName, prefix} = state;

  if (prefix) {
    return (// eslint-disable-line
      <div className={combineClassNames(
        `${componentName}_prefix`,
        `atom-Typography--subhead`)}>
        {prefix}
      </div>
    );
  }
}

function renderSuffix(state) {
  const {componentName, suffix} = state;

  if (suffix) {
    return (// eslint-disable-line
      <div className={combineClassNames(
        `${componentName}_suffix`,
        `atom-Typography--subhead`)}>
        {suffix}
      </div>
    );
  }
}

function renderInputContent(state, decoration) {
  const {componentName, input} = state;

  return (// eslint-disable-line
    <div
      className={combineClassNames(
        `${componentName}_inputContent`,
        `atom-FlexLayout--horizontal`,
        `atom-FlexLayout--end`)}>
      {renderPrefix(state)}
      <div
        className={combineClassNames(
          `${componentName}_labelAndInputContainer`,
          `atom-FlexLayout_flex`,
          `atom-Layout--relative`,
          `atom-Typography--subhead`)}>
        {decoration.label}
        {input}
      </div>
      {renderSuffix(state)}
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

  if (addOns.length > 0) {
    return (// eslint-disable-line
      <div className={`${componentName}_addOnContent`}>
        {addOns}
      </div>
    );
  }
}

function view({addOns$$, decoration$, id, state$}) {
  return addOns$$.map((addOns$) => state$.combineLatest(
    decoration$,
    ...addOns$,
    (state, decoration, ...addOns) => {
      const {componentName, className} = state;
      const {classNameMods} = decoration;

      return ( // eslint-disable-line
        <div className={combineClassNames(
          id, componentName, className, classNameMods)}>
          {renderFloatedLabelPlaceholder(state)}
          {renderInputContent(state, decoration)}
          {renderUnderline(state)}
          {renderAddOns(state, ...addOns)}
        </div>
      );
    }
  ).distinctUntilChanged());
}

export default view;
