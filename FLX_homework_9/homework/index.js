function findTypes(value, ...rest) {
  let arrayOfType = [];
  arrayOfType.push(typeof value);
  
  for(let elem of rest) {
    arrayOfType.push(typeof elem); 
  }
  
  return arrayOfType;
}

function executeforEach(array, callbackFunction){
	
  for(let elem of array) {	
    callbackFunction(elem);
  }
}

function mapArray(array, transformFunction) {
  let newArray = [];
	
  executeforEach(array, elem => newArray.push(transformFunction(elem)));
	
  return newArray;
}

function filterArray(array, predicateFunction) {
  let newArray = [];
	
  executeforEach(array, elem => {
    if(predicateFunction(elem)) {
      newArray.push(elem);
    }
  });
	
  return newArray;
}

function getAmountOfAdultPeople(data) {
  return (filterArray(data, elem => elem.age > 18).length);
}

function getGreenAdultBananaLovers(data) {
  return mapArray(
        filterArray(data, elem => 
		elem.age > 18 && elem.favoriteFruit === 'banana' && elem.eyeColor === 'green'), elem => elem.name);
}


function keys(object){
  let keysOfObject = [];
  
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      keysOfObject.push(key);
    }
  }
  
  return keysOfObject;
}


function values(object){
  let valuesOfObject = [];
  
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      valuesOfObject.push(object[key]);
    }
  }
  
  return valuesOfObject;
}


function showFormattedDate(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
}


function isEvenYear(date) {
  return date.getFullYear()%2 === 0;
}


function isEvenMonth(date) {
  return date.getMonth() % 2 !== 0;
}

const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

findTypes(null, 5, "hello"); // returns [“object”, “number”, “string”]

executeforEach([1,2,3], function(el) {
  console.log(el) 
}); // logs 1 2 3

mapArray([2, 5, 8], function(el) {
  return el + 3 
}); // returns [5, 8, 11]

filterArray([2, 5, 8], function(el) {
  return el > 3 
}); // returns [5, 8]

getAmountOfAdultPeople(data); // returns 3

getGreenAdultBananaLovers(data); // returns [‘George]

keys({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [“keyOne”, “keyTwo”, “keyThree”]

values({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [1, 2, 3]

showFormattedDate(new Date('2019-01-27T01:10:00')); // returns ‘Date: 27 of Jan, 2019’

isEvenYear(new Date('2019-01-27T01:10:00')); // false

isEvenMonth(new Date('2019-02-27T01:10:00')) ;// true