/*Dependencis*/
var app 			= require('app'),
	browserWindow 	= require('browser-window');

/*On ready start*/
app.on('ready', function () {
	var atomScreen 		= require('screen'),
		wndSizes = [atomScreen.getPrimaryDisplay().size.height*0.75];
		wndSizes[1] = wndSizes[0]*0.75

	var wnd = new browserWindow({
		width: atomScreen.getPrimaryDisplay().size.width,
		height: atomScreen.getPrimaryDisplay().size.height
	});
	wnd.loadUrl('file://' + __dirname + '/index.html');
})