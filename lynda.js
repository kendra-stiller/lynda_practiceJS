var dogs = ["weimaraner", "alsatian", "cocker spaniel", "pitty", "bull terrier"];
var dogsBefore = "<h1>Before: " + dogs + "</h1>";

dogs.reverse();
var revDogs = "<h1>After reverse: " + dogs + "</h1>";

dogs.shift();
var shiftDogs = "<h1>After shift: " + dogs + "</h1>";

	dogs.unshift("bull terrier");
var ushiftDogs = "<h1>After unshift: " + dogs + "</h1>";
 
dogs.pop();
var popDogs = "<h1>After pop: " + dogs + "</h1>";
 
dogs.push("weimaraner");
var pushDogs = "<h1>After push(\"weimaraner\")" + dogs + "</h1>"; 
 
dogs.push("weimaraner");
var pushDogs2 = "<h1>After 2nd weim push: " + dogs + "</h1>";
 
var result = dogs.indexOf("weimaraner", 1);
console.log("Index of weimaraner, 1: ", result);
 
var result2 = dogs.indexOf("weimaraner", 5);
console.log("Index of weimaraner, 2: ", result2);

var dogArray = dogs.join(", ");
console.log("dogs.join(\", \"): ", dogArray);
 
//document.body.innerHTML = dogsBefore + revDogs + shiftDogs + ushiftDogs + popDogs + pushDogs + pushDogs2;	
var a = 1/4;
var b = 5/7;
var theBiggest = function() {
	var result;
	a>b? result = ["a", a] : result = ["b", b];
	console.log(result);
}
theBiggest();