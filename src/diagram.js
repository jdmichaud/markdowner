import katex from 'katex';

export default function diagram(fragment) {
  const unescapedFragment = fragment
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
  ;
  return new Promise((resolve, reject) => {
    LaTeX2HTML5.default(unescapedFragment, (div) => {
      let output = div.innerHTML.replace(/visibility: hidden/g, 'visibility: visible');
      output.match(/\$[^\$]*\$/g).forEach(entry => {
        output = output.replace(entry, katex.renderToString(entry.slice(1, -1), {
          displayMode: false,
        }));
      });
      resolve(output);
    });
  });
}
