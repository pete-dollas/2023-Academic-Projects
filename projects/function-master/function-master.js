
//13 - SOLVED
//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array

function objectValues(object) {//input an object
    let output = [];//hold the object values to be output
    for (let key in object) {
        output.push(object[key])
    }
    return output;
} 

//14 - SOLVED
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
    let output = [];//hold the object values to be output
    for (key in object) {
        output.push(key)
      }
      return output.join(" ");
  } 


//15 - SOLVED
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space

function valuesToString(object) {//input an object
    let output = [];//array to hold all string values; will .join() them at return
    for (let key in object) {//loop into each key
        if (typeof object[key] === "string"){//if the key value is a string...
            output.push(object[key])///push it to the output array
        }
    }
    return output.join(" ");    //return only string values, separated with space
}

//16 - SOLVED
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(collection) {//accept any input
     if (typeof collection === "object" && collection instanceof Array === false) {
        return "object"
    }
    else if (collection instanceof Array) {
        return "array"
    }
}

//17 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(string) {//input a 1-word string
    return `${string.slice(0, 1).toUpperCase()}${string.slice(1, string.length)}`
    //return the word with first letter capitalized
}


//18 - SOLVED
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {//input string of words
    let strings = string.split(" "); //temporary array to hold all strings
    let output = [];//output array to hold capitalized strings; will .join() at return
    for (let i = 0; i <= strings.length - 1; i ++){
        output.push(`${strings[i].slice(0, 1).toUpperCase()}${strings[i].slice(1, string.length)}`)
    }
    return output.join(" ");//return capitalized strings
}


//19 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'

function welcomeMessage(object) {//input an object with a name property

    return `Welcome ${object.name.slice(0, 1).toUpperCase()}${object.name.slice(1, object.name.length)}!`    //return "Welcome <Name>!"
}


//20 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and 
//return '<Name> is a <Species>'

function profileInfo(object) {//input an object
    if (object.name && object.species) {
        return `${object.name.slice(0, 1).toUpperCase()}${object.name.slice(1, object.name.length)} is a ${object.species.slice(0, 1).toUpperCase()}${object.species.slice(1, object.species.length)}`
    }
    }

//21 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array 
//return them as a string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(object) {//input an object
if (object.noises && object.noises != "") {
    return object.noises.join(" ")}
else {
    return "there are no noises"}
}


//22 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word) {//input a string of words and a 1-word string
if (string.includes(word))
    {return true}
    else {return false}
}


//23 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object

function addFriend (name, object) {//input a name and an object
    object.friends.push(name)// add the name to the object's friends array
    return object;//return the object
}


//24 SOLVED
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"

function isFriend(name, object) {//input a name and object
    if (object.friends && object.friends.includes(name)) {return true}
    return false;
}


//25 SOLVED

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, 
//return a list of all the names that <name> is not friends with

//takes in a name and an object; return an array of string names that are NOT already friends with this object
function nonFriends(name, array) {//Input name(1-word string) and an array of objects
    let output = []; //empty array container to receive string values of all object key names;  will subsequently be validated
    //first, push all names to output  
  for (let index of array){//
    if (index.name !== name) {//push everyone else's name to the output array
      output.push(index.name)
    }
  }
  //run through his friends list; if it matches output, delete it from output
    for (let i = 0; i < array.length; i++){
     if (array[i].name === name) {
       for (let j = 0; j < array[i].friends.length; j++){
         for (let k = 0; k < output.length; k++) {
           if (array[i].friends[j] === output[k]) {
             output.splice(k, 1)
           }
         }
       }
     }
    }
  
  
    
    return output;//output is an array of string values for each object key's string value not already present in the object's friends array; 
    //edge case: should not include its own key name as a string
  } //close of function

//26
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(object, key, value) {

}


//27.
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"

function removeProperties(object, array) {

}


//28
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed

function dedup(array) {

}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}