var fs = require('fs');
exec = require('child_process').exec;

var myModuleFiles =
[
	// nojquery, init
	'src/libs/logy/logy.js',

	// include jquery
	'src/libs/jquery/jquery-3.5.1.min.js',
	'src/libs/jquery/jquery-fn.js',

	'src/libs/localstorage.js',
	'src/libs/utils.js',
	'src/libs/underscore/underscore-min-v1.11.0.js',

	'src/libs/dataResponse/dataResponse.js',
	// 'src/libs/sortable/Sortable.js',
	// 'src/libs/sortable/SortableRunner.js',
	'src/libs/lazyload/lazyload.min.js',
	'src/libs/lazyload/lazyloadRunner.js',

	'src/libs/counter/jquery.counterup.js',
	'src/libs/counter/counterRunner.js',
	'src/libs/notif/iziToast.js',
	'src/libs/notif/notif.js',
	'src/libs/codeReader/codeReader.js',
	'src/libs/cursor/cursor.js',

	'src/libs/shortkey/shortkey.js',
	'src/libs/nprogress/nprogress.js',
	'src/libs/pingi/pingi.js',
	'src/libs/wordify/wordify.js',
	'src/libs/cloner/cloner.js',
	'src/libs/alerty/alerty.min.js',
	'src/libs/alerty/alerty-runner.js',
	'src/libs/escNav/escNav.js',
	'src/libs/kerkere/kerkere.js',
	'src/libs/dataCopy/dataCopy.js',
	'src/libs/digikalaCrawlMaster/digikalaCrawlMaster.js',

	// JsBarcode
	'src/libs/JsBarcode/JsBarcode.all.min.js',
	'src/libs/JsBarcode/barcodeFlagDetector.js',
	'src/libs/JsBarcode/JsBarcodeRunner.js',

	// cleave
	'src/libs/cleave/cleave.min.js',
	'src/libs/cleave/cleaveRunner.js',

	// tools
	'src/tools/forms-unlock.js',
	'src/tools/navigate-tools.js',
	'src/tools/navigate.js',
	'src/tools/forms.js',

	// use some utitlity
	'src/utility/url.js',
	'src/utility/fnCaller.js',
	'src/utility/fitNumber.js',
	'src/utility/urlParam.js',
	'src/utility/shrink.js',
	'src/utility/print.js',
	'src/utility/dataRunner.js',
	'src/utility/formTools.js',
	'src/utility/smileChecker.js',
	'src/utility/table.js',
	'src/utility/noscriptRemover.js',
	'src/utility/insideIframe.js',
	'src/utility/fileLoader.js',
	'src/utility/consoleMsg.js',
	'src/utility/handleDrag.js',
	'src/utility/gtag.js',
	'src/utility/resizeDetector.js',

	'src/utility/input-files.js',
	'src/utility/language.js',
	'src/utility/responsive.js',
	'src/utility/life.js',
	'src/utility/enter.js',
	'src/utility/pay.js',
	'src/utility/weAreHere.js',
	'src/utility/json.js',
	'src/utility/smoothScroll.js',
	'src/utility/inputChecker.js',
	'src/utility/inputRequirement.js',
	'src/utility/navigateChecker.js',
	'src/utility/catchBeforeUnload.js',
	'src/utility/serviceWorker.js',



	'src/main.js',
	'src/load.js',
	'src/pushState.js',

	// jibres js
	'src/storePanel/numbers.js',
	'src/storePanel/typed.js',
	'src/storePanel/products.js',
	'src/storePanel/storePanel.js',
	'src/storePanel/shortkey.js',
];



module.exports = function (grunt)
{
	grunt.initConfig(
	{
		uglify:
		{
			options:
			{
				sourceMap: false,
				mangle: false
			},
			jibres:
			{
				files:
				{
					'../jibres.min.js': myModuleFiles,
				}
			}
		},
		watch:
		{
			jibres:
			{
				files: myModuleFiles,
				tasks: ['uglify:jibres']
			},
			scripts:
			{
				files: ['*.js'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');

	grunt.registerTask('default', ['uglify', 'watch']);
};
