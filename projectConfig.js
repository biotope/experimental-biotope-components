module.exports = {
	project: 'VI Frontend Framework 5',
	global: {
		externalResources: {
			'vi-css-helper': ['helper.css', 'print.css'],
			'jquery.debouncedresize': 'js/jquery.debouncedresize.js',
			'@biotope/resource-loader': 'src/resourceLoader.js',
			'jquery': 'dist/jquery.js',
			'jquery-migrate': 'dist/jquery-migrate.js',
			'enquire.js': 'dist/enquire.js',
			'jquery-debouncedwidth': 'js/jquery.debouncedwidth.js',
			'normalize.css': 'normalize.css',

		}
	},
	uglify: {
		ignoreList: [
			'resources/js/vendor/custom-elements-es5-adapter.js'
		]
	}
};
