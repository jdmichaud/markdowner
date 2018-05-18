const convert = require('../dist/markdowner');

console.log(`
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <!-- katex -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.js" integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq" crossorigin="anonymous"></script>
  <!-- highlightjs -->
  <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
  <!-- Marked -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.min.js"></script>
</head>
<body>
`);

convert(`
# This is a test

Let \`$x$\` be a variable.

\`\`\`math
$$E = mc^2$$
\`\`\`

\`\`\`javascript
function foo() {
  return () => console.log('stay cool, daddy-O');
}
\`\`\`
`).then(result => {
  console.log(result);
  console.log(`
    </body>
    </html>
  `);
});
