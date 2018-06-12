import katex from 'katex';

export default function math(displayMode, fragment) {
  const unescapedFragment = fragment
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<');
  return Promise.resolve(katex.renderToString(unescapedFragment, {
    displayMode,
  }));
}
