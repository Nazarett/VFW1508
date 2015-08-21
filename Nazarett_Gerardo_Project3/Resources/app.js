//variables
var pWidth = Ti.Platform.displayCaps.platformwidth;
var pHeight = Ti.Platform.displayCaps.platformheight;
var imageCount = 30;
var perRow = 4;
var margin = 10;
var actualWidth = pWidth - margin;
var size = 50.50;

var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",
	layout: "horizontal"
	
});

var border = Ti.UI.createView({
	backgroundColor: "red",
	height: 2,
	width: pWidth, 
	top: 15
});

var viewBox = Ti.UI.createView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	backgroundColor: "#fef"
	
});

for(var i = 0; i<imageCount; i ++){
	var view = Ti.UI.createView({
		backroundColor: "orange",
		top: margin,
		left: margin,
		width: size,
		height: size,
		
	});
	var label = Ti.UI.createLabel({
		text: i + 1,
		color: "#fff",
		
	});
	view.add(label);
	viewBox.add(view);
}

win.add(border);
win.add(viewBox);
win.open();
