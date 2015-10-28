import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';

function view({id, state$, textareaDOM}) {
  return state$.combineLatest(
    textareaDOM,
    ({componentClass}, textarea) => {
      return h(`div`,
        {className: combineClassNames(id, componentClass)},
        textarea
      );
    }
  ).distinctUntilChanged();
}

export default view;
