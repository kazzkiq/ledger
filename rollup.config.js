import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import buble from 'rollup-plugin-buble';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: [
		{
			sourcemap: false,
			format: 'umd',
			name: 'NewLedger',
			file: 'build/build.js'
		}
	],
	plugins: [
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    // globals(),
    builtins(),
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), transpile and minify
		production && buble({ exclude: 'node_modules/**' }),
		production && terser()
	]
};
