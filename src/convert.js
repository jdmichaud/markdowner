import marked from 'marked';
import highlight from 'highlight.js';

import configure from './fragment';

import math from './math';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code, lang) => {
    if (lang == 'math') {
      return code;
    }
    else if (lang) {
      try {
        return highlight.highlight(lang, code).value;
      } catch (e) {
        return highlight.highlightAuto(code).value
      }
    }
    else return highlight.highlightAuto(code).value;
  },
  // highlight: code => highlight.highlightAuto(code).value,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const preprocessors = configure([]);

const postprocessors = configure([{
  // regex: new RegExp('```math(((?!```)[\\s\\S])*)', 'mg'),
  regex: new RegExp('<pre><code class="lang-math">\\$\\$([^\\$]*)\\$\\$', 'mg'),
  processor: math.bind(null, true),
}, {
  regex: new RegExp('<code>\\$([^\\$]*)\\$</code>', 'mg'),
  processor: math.bind(null, false),
}]);

export default async function toHtml(content) {
  const preprocessed = await preprocessors(content);
  const processed = await marked(preprocessed);
  return postprocessors(processed);
}
