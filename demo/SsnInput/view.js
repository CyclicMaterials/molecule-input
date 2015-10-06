/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map(
    (state) => {
      const {componentName, className} = state;

      return (// eslint-disable-line
        <div className={combineClassNames(id, componentName, className)}>
          <input
            className={`${componentName}_input ${componentName}_areaNumber`}
            size="3"
            attributes={{
              maxlength: 3,
              'aria-Label': `First 3 digits of social security number`,
            }}/>
          -
          <input
            className={`${componentName}_input ${componentName}_groupNumber`}
            size="2"
            attributes={{
              maxlength: 2,
              'aria-Label': `Second 2 digits of social security number`,
            }}/>
          -
          <input
            className={`${componentName}_input ${componentName}_serialNumber`}
            size="4"
            attributes={{
              maxlength: 4,
              'aria-Label': `Third 4 digits of social security number`,
            }}/>
        </div>
      );
    }
  );
}

export default view;
