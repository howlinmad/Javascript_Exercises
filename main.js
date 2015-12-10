 
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
