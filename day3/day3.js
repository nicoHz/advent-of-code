
var fs = require('fs'); // Node file system https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
var input = fs.readFileSync('./Input.txt', 'utf8');
var shapes = input.split('\n');
//converts string into array of strings

var triangles = -1;

shapes.forEach(function(shape) {
	shape = shape.trim(); // trim() method removes whitespace from both ends of a string
	shape = shape.replace(/ {1,}/g, ' ');
	// regular expression: match overlapping space between numbers, search global and reduce it to one space between numbers
	// console.log(shape);

	var sizes = shape.split(' ');
	//console.log(sizes);
	var sideA = Number(sizes[0]);
	var sideB = Number(sizes[1]);
	var sideC = Number(sizes[2]);
	
	// console.log(sizes);
	if(validTriangle(sideA,sideB,sideC)) triangles++;
	
	// console.log(sideA + ' ' + sideB + ' ' + sideC+ ' : ' + validTriangle(sideA,sideB,sideC));
		});

function validTriangle(a,b,c) {
	if((a+b) <= c) return false;
	if((a+c) <= b) return false;
	if((b+c) <= a) return false;
	return true;
}

console.log('number of triangles: ' + triangles);

