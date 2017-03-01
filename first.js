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
