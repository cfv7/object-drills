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

console.log(keyDeleter(sampleObj))





