import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';

function view({state$, id}) {
  return state$.map(({componentName, charCounterStr}) => h(`div`,
    {className: combineClassNames(
      id, componentName, `atom-Typography--caption`
    )},
    h(`span`, charCounterStr)
  ));
}

export default view;
