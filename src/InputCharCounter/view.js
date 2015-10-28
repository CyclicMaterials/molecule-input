import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';

function view({state$, id}) {
  return state$.map(({componentClass, charCounterStr}) => h(`div`,
    {className: combineClassNames(
      id, componentClass, `atom-Typography--caption`
    )},
    h(`span`, charCounterStr)
  ));
}

export default view;
