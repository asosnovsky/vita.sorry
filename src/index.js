/*Dependencis*/
var app 			= require('app'),
	browserWindow 	= require('browser-window');

/*On ready start*/
app.on('ready', function () {
	var atomScreen 		= require('screen');

	var wnd = new browserWindow({
		width: atomScreen.getPrimaryDisplay().size.width,
		height: atomScreen.getPrimaryDisplay().size.height
	});
	wnd.loadUrl('file://' + __dirname + '/index.html');
})