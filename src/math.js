import katex from 'katex';

export default function math(displayMode, fragment) {
  const unescapedFragment = fragment.replace('&amp;', '&');
  return Promise.resolve(katex.renderToString(unescapedFragment, {
    displayMode,
  }));
}
