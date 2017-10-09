// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//the result will be "My name is Keith". The var name is defined outside of
//the scope of the function and so is accessible within the function.

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//will return 3 since local variables in functions take priority over global
//variables within functions.

// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//will return 0: Ducks 1: Dogs, 2: Lions, since there is only one variable in
//play: myAnimals is overwritten within the function.

// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

/* the console.log within the function will replace "Keith" with "Harvey", since
the function's local variable takes priority over the global variable within
the function. However, it does not overwrite the global variable, so the
console.log outwith the function will return "Keith"*/

// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

/* will return "Poirot", since the the first line in detectiveInfo overwrites
"Ace Ventura"*/

// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

/* Will return 'rick', since the var murderer within the function is a local
variable, specific to that function. So, while outerFunction is called and the
local var is set to valerie, the global variable takes priority in the
console.log*/
