// authors: Colin & Peter
// date: 3.1.17

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'

function createMyObject() {
  return{
    foo:'bar',
    answerToUniverse: 42,
    "olly olly": 'oxen free',
    sayHello: function(){
    	return 'hello';
    }
  };
}

console.log(createMyObject())

// Modify the updateObject (which takes a single argument (obj))
// so that it adds the following key/value pairs to obj and returns it:

// foo => 'foo'
// bar => 'bar'
// bizz => 'bizz'
// bang => 'bang'

var emptyObj = {};

function updateObject(obj) {
	obj.foo = 'foo';
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
	return obj;
}

console.log(updateObject(emptyObj))

// Modify the personMaker.fullName to be a function that uses self reference
// (via this) in order to return the firstName and lastName properties separated by a space.

// So, for instance, if firstName was 'Jane' and lastName was 'Doe',
// fullName() should return 'Jane Doe'.

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
    	return this.firstName + " " + this.lastName;
    }
  };
  return person;
}

var myPerson = personMaker();
console.log(myPerson.fullName());

// Modify the keyDeleter function so that it deletes keys for foo and bar
// for any object passed in, and then returns the modified object.

function keyDeleter(obj) {
	for (var key in obj){
		if (obj[key] === 'foo' || obj[key] === 'bar'){
			delete obj[key];
		}
	}
	return obj;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
  zing: 'zing',
  dang: 'dang',
  rip: 'rip'
};

console.log(keyDeleter(sampleObj));

// Object Drills 2
// Object Initializers and methods
// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

var loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water/this.flour * 100;
  }
};

//console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

// Object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

function looper(obj) {
  for (var prop in obj) {
    console.log(prop+" "+obj[prop]);
  }
}

var obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

looper(obj);

// Arrays in Objects
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

var hobbitStuff = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(hobbitStuff.meals[3]);

// Arrays of objects

// Create 3-5 objects, each with a name and a job_title. Use people you know,
// or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.
var myArray = [

{
  name: 'peter',
  job_title: 'bootcamper',
  boss: 'lucy'
},

{
  name: 'colin',
  job_title:'unemployed',
  boss: 'lucy'
},

{
  name: 'joe',
  job_title: 'plumber',
},

{
  name: 'jill',
  job_title: 'yogi',
  boss: 'lucy'
}

];

function showInfo(array){
  for (let i = 0; i < array.length; i++){
    var m = array[i];

    // if (!myArray[i].hasOwnProperty('boss')){
    if (m.boss === undefined){
      console.log(`${m.job_title} ${m.name} doesn't report to anybody.`)
    }
    else{
    //console.log('name: ' + myArray[i].name + '   ' + 'job title: ' + myArray[i].job_title);  
    console.log(`${m.job_title} ${m.name} reports to ${m.boss}.`)
    }
  }  
}

showInfo(myArray);

// Properties that aren't there

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". 
// For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." 
// - for example, Founder John doesn't report to anybody.

// Cracking the code 2.0

// Redo your "Cracking the code" problem from Day 1 https://gist.github.com/tparveen/76e0a6042fc6e0f02a2f7e0c56994715 
// but this time use an object to store the codes. Instead of having the function accept a word,
// have the function accept a string and crack the code from the string.

function decode(word){
// Write a function called decode which takes an encoded word as an argument,
// and returns the correct decoded character.
  if (word.charAt(0) === 'a'){
    console.log(word.charAt(1))
    return
  }
  if (word.charAt(0) === 'b'){
    console.log(word.charAt(2))
    return
  }
  if (word.charAt(0) === 'c'){
    console.log(word.charAt(3))
    return
  }
  if (word.charAt(0) === 'd'){
    console.log(word.charAt(4))
    return
  }
  if (word.charAt(0) !== 'a' || 'b' || 'c' || 'd'){
    console.log("")
    return
  }
}

var codes = {
  'a':1,
  'b':2,
  'c':3,
  'd':4
  // test: function(word, array){
  //   if (word.charAt(0) !== 'a' ||  'b' || 'c' || 'd'){
  //     array.push(" ");
  //     return false;
  //   }
  // }
};

function decodeTwo(string){
  // we need to split the string and be able to evaluate each individual word
  var splitNew = string.split(" ");
  var ourCollection = [ ];
  for (let i = 0; i < splitNew.length; i++){
    // declare a var for current word we grabbed
    var currentWord = splitNew[i];

    // if first letter of current word is not defined in Codes object
    // push a whitespace

    console.log(currentWord)
    // console.log(currentWord.charAt(0))
    var firstLetter = currentWord.charAt(0)
    console.log("firstLetter: " + firstLetter);
    var code = codes[firstLetter]
    console.log("code: " + code)
    if (code === undefined) {
      ourCollection.push('');
    }
    else {
      ourCollection.push(currentWord.charAt(code))
    }
    // console.log(code)

    // // for in loop and test that word against properties in codes object
    // for (var key in codes){
    //     if (currentWord.charAt(0) === key){
    //       ourCollection.push(currentWord.charAt(codes[key]));
    //     }
    // }
    // if the loop is complete and nothing pushed to ourCollection then push a whitespace
    // if the first char in word is a,b,c, or d return corresponding value
    // push the corresponding value to array
  }
  console.log(ourCollection)
  return ourCollection.join();
}

decodeTwo('craft block argon meter bells brown croon droop')

// Write a function that prints the following: (possibly using Objects as your primary data structure)

// Gandolf the White is a Wizard of the Middle Earth
// Bilbo Baggings is a Hobbit of the Shire
// Frodo Baggings is a Hobbit of the Shire
// Aragorn son of Arathon is a Man of the Dunnedain
// Legolas is a Elf of the Woodland Realm
// What if you want to add another character such as -

// Arwen Undomiel is a Half-Elf of Rivendell
// What if you want to add a functionality such as use of weapon for each character - for example

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggins is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang

// function lotR(){
//   var x = [
//     {
//      name:'Gandolf the White',
//      type:'Wizard',
//      origin:'Middle Earth',
//      weapon: 'wizard staff'
//     },
//     {
//      name:'Bilbo Baggings',
//      type:'Hobbit',
//      origin:'Shire',
//      weapon:'the Ring'
//     },
//     {
//      name:'Frodo Baggings',
//      type:'Hobbit',
//      origin:'Shire',
//      weapon:'String and Barrow Blade'
//     },
//     {
//      name:'Aragorn son of Arathon',
//      type:'Man',
//      origin:'Dunnedain'
//      weapon:'Anduril'
//     },
    
//     {
//      name:'Legolas',
//      type:'Elf',
//      origin:'Woodland Realm'
//      weapon:'Bow and Arrow'
//     },
//   ]
//  for (var key in x){
//   console.log(x.name + ' is a ' + x.type + ' of the ' + x.origin + ' who uses the ' x.weapon'.')
// }





