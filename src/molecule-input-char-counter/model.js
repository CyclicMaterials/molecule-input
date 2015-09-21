import assign from 'fast.js/object/assign';

function model({props$, dialogueName}) {
  return props$.map((props) => {
    const {value, maxLength} = props;

    // Account for textarea’s new lines
    let charCounterStr = value.replace(/(\r\n|\n|\r)/g, `--`).length;

    if (maxLength !== void 0) {
      charCounterStr += `/` + maxLength;
    }

    return assign({}, props, {dialogueName, charCounterStr});
  });
}

export default model;
