import {h} from '@cycle/dom';
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map(({componentClass, isInvalid, errorMessage}) => {
    const classNameMod = isInvalid ? `is-invalid` : ``;

    return h(`div`, {
      className: combineClassNames(
        id, componentClass, `atom-Typography--caption`, classNameMod
      ),
    }, errorMessage);
  });
}

export default view;
