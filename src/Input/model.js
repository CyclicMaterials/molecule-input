import {merge} from 'ramda';

function model({props$, componentName}) {
  return props$.map(
    (props) => {
      const persistLabelFloat =
        !!(props.placeholder || props.persistLabelFloat);

      return merge(props, {componentName, persistLabelFloat});
    }
  );
}

export default model;
