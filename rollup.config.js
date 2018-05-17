// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/convert.js',
  output: {
    file: 'dist/markdowner.js',
    format: 'umd',
    name: 'markdowner'
  },
  plugins: [
    resolve({ jsnext: true }),
    commonjs({
      namedExports: { 'marked': ['marked'] },
    }),
  ],
};
