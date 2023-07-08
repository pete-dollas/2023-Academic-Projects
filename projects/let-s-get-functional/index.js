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
 * do >> cd pete-dollas.github.io
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
var averageBalance;//skip this until we discuss this on Monday 


//6 SOLVED
var firstLetterCount = function(array, letter){
    
  const fil = array.reduce(function(total, array){
  
    if (array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {total++}
    return total;
  }, 0)
  return fil;
  }

//7
var friendFirstLetterCount = function (array, customer, letter){

    var index = array.findIndex(function(person) {
        return person.name == customer
      });//got the index of customer. use it to loop her friends array
      
    let newArr = [];
    newArr.push(array[index].friends)//make a new temporary array of the friends list so it is easier to work with
        
    const fil = newArr[0].reduce(function(total, array){//0 because the friends list is a sub-array within the friend array
        
    if (array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
        total++}
        return total;
    }, 0)
    return fil;
}

//8
var friendsCount;

//9
var topThreeTags;


//10
var genderCount;

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
