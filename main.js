 
/* 1: Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
//My solution:
var hashtag = "#######";
var output = document.getElementById("output");

for(var i = 0; i < hashtag.length + 1; i++) {
  output.innerHTML += hashtag.slice(hashtag.length-i) + "<br />";
}
/*
//"Eloquent" solution:    
  for (var line = "#"; line.length < 8; line += "#")
  output.innerHTML += line + "<br />";
*/


/* 2. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
//My solution
var fizzbuzz = document.getElementById("fizzbuzz");

for(var i = 1; i < 101; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
      fizzbuzz.innerHTML += "FizzBuzz" + ", ";  
    } else if (i % 5 === 0) {
      fizzbuzz.innerHTML += "Buzz" + ", ";
    } else if(i % 3 === 0){
      fizzbuzz.innerHTML += "Fizz" + ", ";
    } else {
      fizzbuzz.innerHTML += i + ", ";
    }  
}
//"Eloquent" solution:
/*
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  fizzbuzz.innerHTML += (output || n) + ", ";
}
*/


/* 3. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
    At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/
//My solution
var chesstag = "";
function isEven(n) {
   return n % 2 == 0;
}
function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
for(var i=1; i < 64; i++) {
 	if(i % 9 === 0){
      chesstag += "<br />";
    } else if(isEven(i)) {
      chesstag += "#";
    } else if(isOdd(i)){
      chesstag += "&nbsp";
    }
}
document.getElementById("chessboard").innerHTML += chesstag;
//"Eloquent" solution:
/* 
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "&nbsp";
    else
      board += "#";
  }
  board += "<br />";
}

document.getElementById("chessboard").innerHTML += board;
*/
/* 4. Write a function min that takes two arguments and returns their minimum. */
function min(x, y) {
	if(x < y) return x;
  else return y;
}
var minOutput = document.getElementById("minOutput1");
minOutput.innerHTML += min(0, 10);
// → 0
minOutput = document.getElementById("minOutput2");
minOutput.innerHTML += min(0,-10);
// → -10
//"Eloquent" solution:
//Nailed it! Same as mine!

/* 5. We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
 Zero is even.
 One is odd.
 For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
*/
function isEven(number) {
   if (number < 0){
     number = Math.abs(number);
   }
   if (number === 0)
    return true;
   else if (number === 1)
    return false;
   else {
    number -= 2;    
  	return isEven(number);
    }
}
var recursive = document.getElementById("recursive1");
recursive1.innerHTML += isEven(50);
recursive = document.getElementById("recursive2");
recursive2.innerHTML += isEven(75);
recursive = document.getElementById("recursive3");
recursive3.innerHTML += isEven(-1);
//"Eloquent" solution:
/*
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
*/

    
