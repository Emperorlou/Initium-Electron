'use strict';



const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;


var options = [
               //'enable-tcp-fastopen',
               //'enable-experimental-canvas-features',
               'enable-experimental-web-platform-features',
               //'enable-overlay-scrollbars',
               //'enable-hardware-overlays',
               //'enable-universal-accelerated-overflow-scroll',
               //'allow-file-access-from-files',
               //'allow-insecure-websocket-from-https-origin',
               ['js-flags', '--harmony_collections']
             ];

for(var i=0; i < options.length; ++i) {
   if (typeof options[i] === 'string')
     app.commandLine.appendSwitch(options[i]);
   else
     app.commandLine.appendSwitch(options[i][0], options[i][1]);
 }



function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width : 800,
		height : 600,
		center : true,
		title : "Initium",
		"auto-hide-menu-bar" : true,
		icon: __dirname+"/app/phonegap/Initium-Phonegap/www/favicon.png",
		"node-integration":false
	});

	// and load the index.html of the app.
	// mainWindow.loadURL("https://www.playinitium.com/main.jsp");
	mainWindow.loadURL('file://' + __dirname + '/app/phonegap/Initium-Phonegap/www/index.html');

	// Open the DevTools.
//	 mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});
