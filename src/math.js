import katex from 'katex';

export default function math(displayMode, fragment) {
  const unescapedFragment = fragment.replace(/&amp;/g, '&');
  return Promise.resolve(katex.renderToString(unescapedFragment, {
    displayMode,
  }));
}
