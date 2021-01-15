import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

const banner = fs.readFileSync(path.join(__dirname, 'licenseBanner.txt'));

export default {
  input: 'src/j/index.js',
  output: [{
    // TODO: Remove default exports, and this line, in v0.8.0.
    exports: 'named',
    file: './build/j.gui.js',
    format: 'umd',
    name: 'j',
    sourcemap: true,
    banner: banner
  }, {
    file: './build/j.gui.module.js',
    format: 'es',
    sourcemap: true,
    banner: banner
  }],
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve(),
    sass({
      insert: true,
      output: 'build/j.gui.css',
      options: {outputStyle: 'compressed'}
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    }),
    cleanup()
  ]
};
