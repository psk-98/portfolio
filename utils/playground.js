const snippet = {
  markup: `<div id=app />`,
  css: ``,
  javascript: `import { h, Component, render } from 'preact'; import htm from
'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));`,
};
