import katex from 'katex';

export default function math(displayMode, fragment) {

  return Promise.resolve(katex.renderToString(fragment, {
    displayMode,
  }));
}
