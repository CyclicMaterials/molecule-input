import combineClassNames from '@cyclic/util-combine-class-names';
import {decode} from 'ent';
import {h} from '@cycle/dom';

function renderFloatedLabelPlaceholder(state) {
  const {componentName, disableLabelFloat} = state;

  if (!disableLabelFloat) {
    return h(
      `div.${componentName}_floatedLabelPlaceholder.atom-Typography--caption`,
      decode(`&nbsp;`)
    );
  }
}

function renderPrefix(state) {
  const {componentName, prefix} = state;

  if (prefix) {
    return h(`div.${componentName}_prefix.atom-Typography--subhead`, prefix);
  }
}

function renderSuffix(state) {
  const {componentName, suffix} = state;

  if (suffix) {
    return h(`div.${componentName}_suffix.atom-Typography--subhead`, suffix);
  }
}

function renderInputContent(state, decoration) {
  const {componentName, input} = state;

  return h(`div.${componentName}_inputContent` +
    `.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
      renderPrefix(state),
      h(`div.${componentName}_labelAndInputContainer.atom-FlexLayout_flex` +
        `.atom-Layout--relative.atom-Typography--subhead`, [
          decoration.label,
          input,
        ]
      ),
      renderSuffix(state),
    ]
  );
}

function renderUnderline(state) {
  const {componentName} = state;

  return h(`div.${componentName}_underline`, [
    h(`div.${componentName}_unfocusedLine.atom-Layout--fit`),
    h(`div.${componentName}_focusedLine.atom-Layout--fit`),
  ]);
}

function renderAddOns(state, ...addOn$s) {
  const {componentName} = state;

  if (addOn$s.length > 0) {
    return h(`div.${componentName}_addOnContent`, addOn$s);
  }
}

function view({addOn$s$, decoration$, id, state$}) {
  return state$.combineLatest(
    decoration$,
    addOn$s$,
    (state, decoration, addOn$s) => {
      const {componentName, className} = state;
      const {classNameMods} = decoration;

      return h(`div`,
        {
          className: combineClassNames(
            id, componentName, className, classNameMods
          ),
        }, [
          renderFloatedLabelPlaceholder(state),
          renderInputContent(state, decoration),
          renderUnderline(state),
          renderAddOns(state, ...addOn$s),
        ]
      );
    }
  ).distinctUntilChanged();
}

export default view;
