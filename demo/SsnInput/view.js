import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom';

function view({state$, id}) {
  return state$.map(
    (state) => {
      const {componentName, className} = state;

      return h(`div`,
        {className: combineClassNames(id, componentName, className)},
        [
          h(`input.${componentName}_input.${componentName}_areaNumber`,
            {
              size: 3,
              attributes: {
                maxlength: 3,
                'aria-Label': `First 3 digits of social security number`,
              },
            }
          ),
          h(`text`, `-`),
          h(`input.${componentName}_input.${componentName}_groupNumber`,
            {
              size: 2,
              attributes: {
                maxlength: 2,
                'aria-Label': `Second 2 digits of social security number`,
              },
            }
          ),
          h(`text`, `-`),
          h(`input.${componentName}_input.${componentName}_serialNumber`,
            {
              size: 4,
              attributes: {
                maxlength: 4,
                'aria-Label': `Third 4 digits of social security number`,
              },
            }
          ),
        ]);
    }
  );
}

export default view;
