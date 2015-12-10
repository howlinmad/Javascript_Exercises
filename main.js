 
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


