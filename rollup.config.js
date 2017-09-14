import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const conf = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'hermes',
  },
  plugins: [babel()]
};

if (process.env.NODE_ENV === 'production') {
  conf.output.file = 'dist/index.min.js';
  conf.plugins.push(uglify());
}

export default conf;
