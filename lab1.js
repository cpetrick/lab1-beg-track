'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 :)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Below are some examples for how to use the assert method. Tip: once you've run
 this file a couple times to see how they work, comment them out.
 That will help later when you run jscs.
*/

assert(1 === 1, '1 equals 1 - this assert will pass.');
assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');

/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

//your code goes here
// assert('apes' === 'apes', 'apes are apes');
// assert('snakes' === 'birds', 'snakes are not birds' );
// console.log ("Hello World");


/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)


var sentence1Array = sentence1.split(' ');

for (var i = 0; i < sentence1Array.length; i++) {
  sentence1Array[i] = "chirp";
}
var newSentence1Array = sentence1Array.join(' ');
// console.log ("newSentence1Array "+ newSentence1Array);
sentence1 = newSentence1Array + ".";



// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

// your code goes here
var sentence2Array = sentence2.split(' ');
var i = 0;
while ( i < sentence2Array.length) {
  sentence2Array[i] = "chirp";
  i++;
}
var newSentence2Array = sentence2Array.join(' ');
// console.log ("newSentence2Array "+ newSentence2Array);
sentence2 = newSentence2Array + ".";


// Leave these assertions as-is! If they pass, your code works.
// console.log("sentence1 " + sentence1)
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
// console.log ("Sentence 2 Output " + sentence2);
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.','sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (10 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;
//Math.floor(Math.random() * (4)) + 0;
//var animalReference = Math.floor(Math.random() * (4)) + 0;

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

// your code goes here


nextAnimal = favoriteAnimals[Math.floor(Math.random()*favoriteAnimals.length)];

assert(nextAnimal, 'assign something to nextAnimal');

/* =====================================================================
----------------- Survey Says... (12 points total) ---------------------
========================================================================
 Like any conscientious business, the Woodland Park Zoo collects statistics
 about its animal exhibits. The animalExhibitsStats object is a summary of what
 they found.
*/

// TODO: 4 points
// All of the property names below are surrounded by quotes. Some of the names
// don't require quotes for the code to work. Remove the unnecessary quotes.

var animalExhibitStats = {
   numberOpen: 13,
   'number closed': 2,
   'petting-zoo-open': true,
   mostPopular: 'Lucky the Emperor Penguin',
   '2ndMostPopular': 'Dumbo the Depressed Donkey'
};

/*
 TODO: 4 points
 The animalExhibitStats object is indexed four times below using bracket
 notation. WITHOUT changing any of the property names, replace the bracket
 notation with dot notation wherever possible.
*/

assert(animalExhibitStats.numberOpen === 13, 'there should be 13 open exhibits');
assert(animalExhibitStats['number closed'] === 2, 'there should be 2 closed exhibits');
assert(animalExhibitStats['petting-zoo-open'], 'hey! =( i was promised meerkats!');
assert(animalExhibitStats['2ndMostPopular'] === 'Dumbo the Depressed Donkey',
  'Dumbo is supposed to be second place, as usual');

// TODO: 4 points
// Write an assert about the 'mostPopular' property of animalExibitStats.
// Use the above examples to guide you.

// your assert goes here
assert(animalExhibitStats.mostPopular === 1, 'there can only be one "Most Popular" animal exhibit!');
/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
