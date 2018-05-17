const convert = require('./dist/markdowner');

convert(`
  # This is a test

  Let \`$x$\` be a variable.

  \`\`\`javascript
  E = mc^2$$
  \`\`\`

  \`\`\`javascript
  function foo() {
  	return () => console.log('stay cool, daddy-O');
  }
  \`\`\`
`).then(result => console.log(result));
