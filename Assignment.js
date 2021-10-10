//1.
var myDog ={
    "name" : "Tommy",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["caty","doggy"]
};
console.log(myDog)

//2.
var testObject = {
     hat : "ballcap",
     shirt : "jersey"
};
var hatValue = testObject.hat;
var shirtValue = testObject.shirt;

//3.
var testObject1 = {
    "entreeValue" : "hamburger",
    "drinkValue" : "water"
};
testObject1["entreeValue"];
testObject1["drinkValue"];

//4.
// its same as 3

//5.
var testObj = {
 playerNumber :16
};
function propPrefix(str) {
    var s = "player";
    return s + str;
}
var testProp = propPrefix("Montana");
console.log(testObj[testProp]);

// 6.
var myDog = {
    "name" : "Coder"
};
myDog.name = "Happy Coder";

//7.
var  myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
 myDog.bark = "woof";

//8.
var  myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
delete myDog.tails;

//9.
var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver" ,
    "echo" : "Easy",
    "foxtrot" : "Frank"
};
lookup["alpha"] ;
lookup["echo"];

var value = "bravo" ;
lookup[value] ;



// 10.
var myObj = {
    gift: "pony",
     pet: "kitten",
      bed: "sleigh",
    } ;
    function checkObj(checkProp) {
        var result = "";
        switch(checkProp) {
        case "gift":
        result = "pony";
        break;
        case "pet":
        result = "kitten";
        break;
        case "bed":
        result = "sleigh";
        break;
        default:
        result = "Not Found";
        break;
        }
        return result;
        }
      checkObj("gift");
      checkObj("pet");
      checkObj("house");


    // 11.
    var myMusic = [
        { artist: "Billy Joel",
          title: "Piano Man",
          release_year: 1973,
          formats: ["CD", "8T", "LP"],
          gold: true
        },
        { artist: "Deep Purple",
          title: "Smoke on the water",
          release_year: 1976,
          formats: ["CD", "8T", "LP"]
        }
      ];


    // 12.
    var myStorage = {
        "car": {
          "inside": {
            "glove box": "maps",
          }
        }
      };
      myStorage.car.inside["glove box"];


    //  13.
      var myPlants = [
        {
          type: "flowers",
          list: ["rose", "tulip", "dandelion"]
        },
        {
          type: "trees",
          list: ["fir", "pine", "birch"]
        }
      ];
      myPlants[1].list[1];



    // 14.
    var recordCollection = {
        2548: {
          albumTitle: 'Slippery When Wet',
          artist: 'Bon Jovi',
          tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
          albumTitle: '1999',
          artist: 'Prince',
          tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
          artist: 'Robert Palmer',
          tracks: []
        },
        5439: {
          albumTitle: 'ABBA Gold'
        }
      };
      function updateRecords(records, id, prop, value) {
        if (value === '') {
          delete records[id][prop];
        } else if (prop === 'tracks') {
         records[id][prop] = records[id][prop] || []; 
          records[id][prop].push(value);
        } else {
          records[id][prop] = value;
        }
        return records;
      }
      console.log(recordCollection);

    // 15.
    var myArray = [];
    var i = 5;
    while(i >= 0) {
    myArray.push(i);
    i--;
}
console.log(myArray)

// 16.
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray)

// 17.
var myArray = [];
for (var i = 1; i < 10; i += 2) 
{  myArray.push(i);
}
console.log(myArray)


//18.
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

// 19.
var total = 0;
var myArr =[20];
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

// 20.
// same as 19.

// 21.
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product += arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 22.
function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  console.log(sum);

// 23.
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  console.log(lookUpProfile);

//24.
function randomFraction() {
    var result = 0;
    while (result === 0) {
      result = Math.random();
    }
    return result;
  }
  console.log(randomFraction) ;

// 25.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  console.log(randomRange) ;
  
// 26.
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("77");
console.log(convertToInteger);

// 27.
function checkEqual(a, b) {

  return a === b ? "true" : "False";
}


console.log(checkEqual(1, 2));

// 28.
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log (checkSign(10));

// 29.
function countdown(n){

  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown);  

// 30.
function countdown(n){

  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown);  

// 31.
function rangeOfNumbers(startNum, endNum) {

  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers);

// 32.
function countdown(n){

      if (n < 1) {
        return [];
       } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
      }
     }
    console.log(countdown);  

// 33.
function rangeOfNumbers(startNum, endNum) {

  if (endNum - startNum === 10) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers);

