var path = "L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5";

var pathSteps = path.split(", ");
// what exectly is .split and how does it work?
// Save the information from path in an array

var x = 0;
var y = 0;

console.log(pathSteps);
var direction = 0;

for(var i = 0; i < pathSteps.length; i++) {

    var currentStep = pathSteps[i];

    var firstChar = currentStep[0];

    switch(firstChar){
        case "R": direction++;
            break;
        case "L": direction--;
            break;
        default: throw new Error("This is no valid direction");
    }
    if (direction > 3) direction = 0;
    if (direction < 0) direction = 3;



// the res the string is a number which indicates how far in the
// new direction the bunny should travel.
var distance = parseInt(currentStep.slice(1));
// update current x and y co-ordinates accordingly
//what is the difference between slice and split?
//
switch(direction){
    case 0: y+= distance;
        break;
    case 1: x+= distance;
        break;
    case 2: y-= distance;
        break;
    case 3: x -= distance;
        break;
}
console.log(" current step",currentStep, "x and y:", x,y);
}
