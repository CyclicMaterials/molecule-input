import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';

function view({id, state$, textareaDOM}) {
  return state$.combineLatest(
    textareaDOM,
    ({componentName}, textarea) => {
      return h(`div`,
        {className: combineClassNames(id, componentName)},
        textarea
      );
    }
  ).distinctUntilChanged();
}

export default view;
