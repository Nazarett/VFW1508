var myConsoles = ["Atari", "Colecovision", "Nintendo", "Sega", "Playstation", "Xbox"];

var nextDisplay = function(){
	displayText.hide();
	
	var nConsolesLabel = Ti.UI.createLabel({
		text: myConsoles[1],
		color: "black",
		font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
		textAlign: "center"
	});
	
	mainScreen.add(nConsolesLabel);
	
};

nButtonView.addEventListener("click", nextDisplay);


