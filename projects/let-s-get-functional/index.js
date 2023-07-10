// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. IGNORE THIS- Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. TO TEST:
 * 
 *    run the following command in your terminal:
 * make sure terminal says 
 *>> gitpod /workspace $
 *  
 * if it doesnt, repeat>> cd ..
 * until it does.
 *    
 *then enter>>
 *    npm start --prefix ./pete-dollas.github.io/projects/let-s-get-functional
 *
 * 
 * when ready to commit, get back to github
 * 
 * do >> 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
 * 
 * 
 * use readme for instructions
 * use data=>customers to see the data being manipulated
 */

 //#1 modeled for us; it started as 
 /**
var maleCount = function(array) {

};
*/
//1 SOLVED
var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === "male"
    })
    return males.length
};

//2 SOLVED
var femaleCount = function(array) {
    let females = array.reduce(function(total, array){
        if (array.gender === "female"){
            total++
        }
        return total;
    }, 0)
    return females;
};

//3 SOLVED
var oldestCustomer = function(array){

const oldest = array.reduce(function (accum, current){
    if (accum.age > current.age) {   
        return accum
      }
      else {
        return current
      }
     })
    return oldest.name;
}

//4 SOLVED
var youngestCustomer = function(array){// = _.reduce(array, function(accumulator, current){

    const youngest = array.reduce(function(accum, current){
        if (accum.age < current.age) {return accum}
        else if (accum.age > current.age) {return current}
    })
    return youngest.name;
}

//5
var averageBalance = function(array){
  let output = []//must output a number
  let noCustomers = array.length//find number of customers

    for (let i = 0; i < array.length; i++){
      let cash = array[i].balance.replace("$", "")//need to splice or replace $ and comma
      let both = cash.replace(",", "")
      output.push(both*1)//push that
    }
    
    let sum = output.reduce((a, b) => a + b, 0);
   return Number((sum/= noCustomers))
  //return output; //a number representing the average balance of all customers
  } 


//6 SOLVED
var firstLetterCount = function(array, letter){
    
  const fil = array.reduce(function(total, array){
  
    if (array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {total++}
    return total;
  }, 0)
  return fil;
  }

//7 SOLVED
  var friendFirstLetterCount = function (array, customer, letter){
    for (let i = 0; i < array.length; i++){
      if (array[i].name === customer){
        const fil = array[i].friends.reduce(function(total, array){
          if (array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            total++
          }
          return total;
        }, 0)
      return fil;   
        }//end of reduce
      }
    }//end of entire function

//8 SOLVED
var friendsCount = function (array, name) {
  let output = [];
  for (let i = 0; i < array.length; i++){
      const reduceFriends = array[i].friends.reduce(function(total, array){
        if (array.name === name) {
          output.push(customers[i].name)
        }
        return array;
      }, 0)
  } //end of main for loop for customer names
  return output;
}//end of friendsCount

//9

var topThreeTags = function(array){
  //1 use reduce to collect all tag names without repeats
  //2 store all unique tags in an object and set the value to 1
  //3 use the object as the base comparison to reiterate customers and tally the counts for each tag
  //4 sort the code values in the object
  //5 return the 3 highest in an array
let tagCollector = {};//temporary holding obj for incoming tag keys and values

  //Steps 1-3: iterate all tags one at a time; if they dont exist, create key/value = 1, else add 1
 const tagReduce = array.reduce((accum, nextObj) => {//use reduce to go through each object and collect all known tags
    for (let i = 0; i < nextObj.tags.length; i++) {//for loop will go through each tags per object
     if(tagCollector[nextObj.tags[i]]) {tagCollector[nextObj.tags[i]]++}
      else {tagCollector[nextObj.tags[i]] = 1}
      }
      return accum;//return accum at the end of the cycle(or else it will show the last object instead)
    })
let highScores = [];
  for (let key in tagCollector){
  highScores.push(tagCollector[key])
}
  const numSort = highScores.sort((a, b) => b - a)
  let h1 = numSort[0]
  let h2 = numSort[1]
  let h3 = numSort[2]

  let output = [];
  for (let key in tagCollector){
  if ( tagCollector[key] === h1 || tagCollector[key] === h2 || tagCollector[key] === h3){
    output.push(key)
                }
}
  return output;
}

//10
var genderCount = function(array){
  let output = {
    male: 0,
    female: 0,
    "non-binary": 0
  };//must create an object of summaries
  //keys gender = male, female, non-binary
  const genderTally = array.reduce((accum, next) =>
      output[next.gender] ++, 0);
  return output;//must be an object of summaries
}
console.log(genderCount(customers))

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
