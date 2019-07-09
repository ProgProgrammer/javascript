var scores = [60, 50, 60, 58, 54, 54,
 58, 50, 52, 54, 48, 69,
 34, 55, 51, 52, 44, 51,
 69, 64, 66, 55, 52, 61,
 46, 31, 57, 52, 44, 18,
 41, 53, 55, 61, 51, 44];
 
var maxScore = 0;
var myScores = [];
 
 for(var transfer = 0; transfer < scores.length; transfer++) {
 	 document.write("Bubble solution #" + transfer + "score: " + scores[transfer]);
  if (scores[transfer] > maxScore) {
  	maxScore = scores[transfer];
  }  	//myScores.push(scores[transfer]);
 }
 
 for(var transfer = 0; transfer < scores.length; transfer++) {
   if (scores[transfer] === maxScore) {
   		myScores.push(transfer);
   }
 }
 
 document.write("Bubbles tests: " + scores.length);
 document.write("Highest bubble score: " + maxScore);
 document.write("Solutions with highest score: " + myScores);