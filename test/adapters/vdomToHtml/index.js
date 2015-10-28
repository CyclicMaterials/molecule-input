import toHTML from 'vdom-to-html';

function vdomToHtml(node, parent) {
  return toHTML(node, parent).replace(/ +/g, ` `);
}

export default vdomToHtml;
