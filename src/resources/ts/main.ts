(function ($, window, document) {
	'use strict';

	$(function () {

		// listen to resourcesReady event
		$(window).one('resourcesReady', function() {
			init();
		});

		/* globals resourceLoader */
		window['resourceLoader']({
			base: window['biotope'].configuration.get('data.staticResourcesBase'),
			baseMap: {
				'##content': window['biotope'].configuration.get('data.staticResourcesContentRepoBase')
			}
		});

		function init() {
			window['biotope'].configuration.get('initCore')();
			window['biotope'].configuration.get('initElementFunctions')();
		}

	});

	window['biotope'].configuration.set('initCore', function () {
		
	});

})(jQuery, window, document);
