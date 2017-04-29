var key1 = "RDRRDLRRUDRUUUULDDRDUULLDUULDURDDUDRULDLUDDRLRDUDDURRRRURDURLLRDRUUULDLLLURDRLLULLUULULLLDLLLRRURRLRDUULRURRUDRRDRLURLRURLLULRUURRUURDDLDRDLDLLUDUULLLUUUUDULLDRRUURLDURDDDDDRLLRRURDLUDRRUUDLRRLLRDURDUDDDLRDDRDLRULLUULRULRLLULDDRURUUDLDDULDRLLURDDUDDUDRDUDLDRRRDURRLDRDRLDLLDUDDDULULRRULRLLURDRRDDUUUUUULRUDLRRDURDLRDLUDLDURUDDUUURUDLUUULDLRDURDLDUUDLDDDURUUDUUDRLRDULLDUULUDRUDRLRRRDLLDRUDULRRUDDURLDRURRLLRRRDRLLDLULULRRUURRURLLUDRRLRULURLDDDDDURUDRRRRULLUUDLDDLUUL";
var key2 = "ULURUDLULDULDLLDDLLLDRRLLUDRRDRDUDURUDLRRRRUDRDDURLRRULLDLURLDULLUDDLUDURDUURRRRLDLRLDDULLRURLULLDDRUDLRRRLDRRRDLDRLLDDRRDDLUUDRUDDLULRURLDURRLLDLRUDLLRRUULUDRLLLRLDULURRRRRDDUURDRRUUDULRUULDDULRLUDLUDDULLRLRDDLRLLURRRULDLRRRUURRLDDRDLRDLRRDRDLDRDUDRDURUUDRLRRULRDLLDLLRRRDRLDRLRLRLLLURURDULUUDDRLLDDDRURRURLRDDULLRURUDRRDRLRRRLDLRLRULDRLUURRUUULRLDLLURLLLDLLLDRRDULRURRRRLUDLLRRUDLRUDRURDRRDLUUURRDLRLRUUUDURDLUDURRUUDURLUDDDULLDRDLLDDDRLDDDRLDLDDDDUDUUDURUUDULRDDLULDRDRLURLUDRDLUULLULRLULRDDRULDUDDURUURULUDLUURLURU";
var key3 = "URLURDDRLLURRRLDLDLUDUURDRUDLLLRRDLUUULRRLURRRLUDUDLRLDDRUDLRRRULUDUDLLLULULLLRUDULDDDLLLRRRLRURDULUDDDULDLULURRRDLURDLRLLDUDRUDURDRRURULDRDUDLLRDDDUDDURLUULLULRDRRLDDLDURLRRRLDRDLDULRULRRRLRLLDULRDLURLRUUDURRUUDLLUDRUDLRLDUUDLURRRDDUUDUDRLDLDDRURDDLLDDRDLRLRDLLLUDLUUDRLRLRDDRDLRDLLUULLLLUULLDLLDLRDLRLRRLUUDLLRLRUDRURULRLRLULUDRLLUDDUDDULRLDDRUUUURULDRRULLLDUURULUDRLLURLRRLDLRRLDDRRRDUDDUDLDDLULUDDUURDLLLRLDLRDRUUUUUDDDLDRDDRRRLRURRRRDURDRURUDLURRURDRLRUUDDLDRRULLDURDRLRRDURURUULRDUDLDRDDLULULRDRRUDDRLLRLULRLLUUDRDUUDDUDLRUUDLLUULLRUULUDDLURRRLLDRLRRLLRULLDUULURLLLLUUULDR";
var key4 = "LDUURULLRLDRRUUDUUUURUUUDDDURRDDLRDLLRDDRULDDUURUDDURLLUDRDUDRDULDRRRLULUDRULLLLDRLLDRDLDLLRURULUDDDDURDDDRLLUDLDRULRDLDUDDDUUDLLRLLLDLRLRLRRUDDULDDDUDLDDLUDDULDLLLLULLLLDDURDDURRRDDRLRLLUDLLUDDDUDURUDRLRDRULULDDRULDLULULLRUULRLDULUURRDRDRRDLDDDRRLUULDLUDRDDUDLRURULLDDURLDDRULUDLDDDRDRLLRDLLUURRRURDRLRURLDDLURDRURDDURLLRLRUDUUDLDUDURRDDURDRDDUDDDUDUURURDDLLRUUDDRRDULDDLLDLRULUULRUUDLLDRLULDULDDUDLULRULDRLLDUULDDDLRLLRLULDDULDDRRRLDRRLURULRDDRDLRRDUDDRDRRRRUDUDLLRRDRRURRUURDRULDDUDURLUDDURDUDRDUULLDRURUURURDRRLDDLDLUURLULRUDURDRUUURRURRDRUDRUURDURLRULULLLULDLLDLRRLDRDLUULUDDDLRDRLRLDRUDUDRLLRL";
var key5 = "LURLUURLURDUUDRUDLDLLURRRDLDRRRULDDRRDRDUUDRUDURDDDURLUDDLULUULRRLLRULUDRDDRRRLDURDUDDURDDDLRLDDLULLDRDDLUUDUURRRLULRUURRRRLLULDUDRDUURRRURRDRDUDUDLUDULLDLDDRLUDRURDULURLURRLLURLLLRLUURLRUDLUDDRLURRUULULRLURRURUDURDLDLDDUDDRDLLRLLRRULDDRUDURUDDDUDLLRDLRUDULLLRRRUURUDUUULLRDUDRURUDULLDLLUUUDRULRLLRRDDDDUDULDRDRLLDDLLDDDURRUDURLDLRDRUURDDURLRDRURLRRLLRLULDRRLRUDURDUURRLUUULUDDDLRLULRDRLLURRRDLURDUUDRRRLUURRLLUDLUDLUULLRRDLLRDDRURRUURLDDLRLRLRUDLDLRLRDRRDLLLRDLRDUDLLDDDRD";

var move1 = key1.split("");
var move2 = key2.split("");
var move3 = key3.split("");
var move4 = key4.split("");
var move5 = key5.split("");

var keyToPress;
var xPos = 2; 
var yPos = 0;

var keypad = [
	["o", "o", 1, "o","o"],
	["o",  2,  3,  4, "o"],
	[ 5,   6,  7,  8,  9 ],
	["o", "A","B","C","o"],
	["o", "o","D","o","o"]
	];

console.log(keypad[2][0]);

var currentPosition = keypad[xPos][yPos];

function findButton(buttonX) {
	keyToPress= buttonX;
	for(var i = 0; i < keyToPress.length; i++) {

		var currentLetter = keyToPress[i];
		switch(currentLetter) {
			case "U": xPos--;
					  if (xPos < 0) xPos = 0;
					  if(keypad[xPos][yPos]==="o") {
						  xPos++;
					  }
					  break;
			case "D": xPos++;
					  if (xPos > 4) xPos = 4;
					  if(keypad[xPos][yPos]==="o") {
						  xPos--;
					  }
					  break;

			case "L": yPos--;
					  if (yPos < 0) yPos = 0;
					  if(keypad[xPos][yPos]==="o") {
						  yPos++;
					  }  
					  break;
			case "R": yPos++;
					  if (yPos > 4) yPos = 4;
					  if(keypad[xPos][yPos]==="o") {  
						  yPos--;
					  }  
					  break;
			default: throw new Error("This is no valid direction");
		} 
	}
}

findButton(move1);
console.log("***push button one: ", keypad[xPos][yPos]);
findButton(move2);
console.log("***push button two: ", keypad[xPos][yPos]);
findButton(move3);
console.log("***push button three: ", keypad[xPos][yPos]);
findButton(move4);
console.log("***push button four: ", keypad[xPos][yPos]);
findButton(move5);
console.log("***push button five: ", keypad[xPos][yPos]);

