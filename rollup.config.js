import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import eslint from 'rollup-plugin-eslint'

const env = process.env.NODE_ENV

const config = {
	entry: './src/index.js',
	external: ['react', 'prop-types', 'rc-select', 'classnames', 'react-dom'],
	format: 'umd',
	globals: {
		react: 'React',
		"prop-types": 'PropTypes',
		"rc-select": 'rc-select',
        "classnames": 'classnames',
        'react-dom': 'ReactDOM',
	},
	dest: './lib/ytTable.js',
	moduleName: 'ytTable',
	plugins: [
		// less(),
		postcss({
            // extract: true,
			plugins: [],
        }),
        eslint({
            exclude: [/\.(less)$/, '**/examples/**', 'lib/**', '**/node_modules/**', 'asert/**']
        }),
		babel({
            exclude: '**/node_modules/**',
            plugins: ['external-helpers']
        }),
		commonjs(),
	],
}

if (env === 'production') {
	config.plugins.push(
		uglify({
			compress: {
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				warnings: false,
			},
		})
	)
}

export default config
