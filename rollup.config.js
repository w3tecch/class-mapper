import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pascalCase from 'pascal-case';

const pkg = require('./package');

export default {
  input: 'es/index.js',
  output: {
    file: 'dist/class-mapper.js',
    name: pascalCase(pkg.name),
    sourceMap: true,
    format: 'umd',
    exports: 'named'
  },
  plugins: [
    sourcemaps(),
    nodeResolve(),
    nodeGlobals(),
    nodeBuiltins(),
    commonjs(),
    uglify()
  ]
};
