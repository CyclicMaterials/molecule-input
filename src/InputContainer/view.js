import combineClassNames from '@cyclic/util-combine-class-names';
import {decode} from 'ent';
import {h} from '@cycle/dom';

function renderFloatedLabelPlaceholder(state) {
  const {componentClass, disableLabelFloat} = state;

  if (!disableLabelFloat) {
    return h(
      `div.${componentClass}_floatedLabelPlaceholder.atom-Typography--caption`,
      decode(`&nbsp;`)
    );
  }
}

function renderPrefix(state) {
  const {componentClass, prefix} = state;

  if (prefix) {
    return h(`div.${componentClass}_prefix.atom-Typography--subhead`, prefix);
  }
}

function renderSuffix(state) {
  const {componentClass, suffix} = state;

  if (suffix) {
    return h(`div.${componentClass}_suffix.atom-Typography--subhead`, suffix);
  }
}

function renderInputContent(state, decoration) {
  const {componentClass, input} = state;

  return h(`div.${componentClass}_inputContent` +
    `.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
      renderPrefix(state),
      h(`div.${componentClass}_labelAndInputContainer.atom-FlexLayout_flex` +
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
  const {componentClass} = state;

  return h(`div.${componentClass}_underline`, [
    h(`div.${componentClass}_unfocusedLine.atom-Layout--fit`),
    h(`div.${componentClass}_focusedLine.atom-Layout--fit`),
  ]);
}

function renderAddOns(state, ...addOn$s) {
  const {componentClass} = state;

  if (addOn$s.length > 0) {
    return h(`div.${componentClass}_addOnContent`, addOn$s);
  }
}

function view({addOn$s$, decoration$, id, state$}) {
  return state$.combineLatest(
    decoration$,
    addOn$s$,
    (state, decoration, addOn$s) => {
      const {componentClass, className} = state;
      const {classNameMods} = decoration;

      return h(`div`,
        {
          className: combineClassNames(
            id, componentClass, className, classNameMods
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
