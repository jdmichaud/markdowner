async function extract_n_replace(regex, processor, content) {
  let match;
  // Look for macros
  regex.lastIndex = 0;
  while (match !== null) {
    match = regex.exec(content);
    if (match !== null) {
      const fragment = match[1];
      const result = await processor(fragment);
      content =
        content.substr(0, match.index) + '\n' +
        result +
        content.substr(match.index + match[0].length);
    }
  }
  return content;
}

export default function configure(config) {
  return (content) => {
    return config.reduce(async (previousPromise, pp) => {
      const tempResult = await previousPromise;
      return extract_n_replace(pp.regex, pp.processor, tempResult);
    }, Promise.resolve(content))
  }
}