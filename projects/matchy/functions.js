/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){//parameter array for animals, string for name of animal we'll be searching
for (let i = 0; i <= array.length - 1; i++) {
    if (string === array[i].name) {return array[i]}//return the animal's object if that name exists
}
return null;//return null if no animal with that name exists
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
// parameter 1; an Array of animals, 
//parameter 2; a String representing  the name of an animal on which to perform a search, 
//parameter 3; Object that represents the replacement animal.
for (let i = 0; i <= array.length - 1; i++){
    if (animals[i].includes(name) === true) {animals.splice(i, 1, replacement)}
}
}

function replace(animals, name, replacement){
// parameter 1; an Array of animals, 
//parameter 2; a String representing  the name of an animal on which to perform a search, 
//parameter 3; Object that represents the replacement animal.
for (let i = 0; i <= animals.length - 1; i++){
    if (animals[i]["name"] === name) {animals.splice(i, 1, replacement)}
}// - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//Otherwise do nothing.
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){//takes 2 parameters: animals is an array & name is the animal.name to search for
 //if animal.name exists, remove it
 for (let i = 0; i <= animals.length - 1; i++) {
    if (animals[i]["name"] === name) {animals.splice(i, 1)}
 }
}//else do nothing


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){//2 parameters: animals is an array, animal is a new Object to be added.
    //- Checks that the animal Object has a `name` property with a length > 0.
    //- Checks that the animal Object has a `species` property with a length > 0.
    let flag = 0; //warning flag for name check validation; anything over 0 represents a matched name

    if (animal.name.length > 0 && animal.species.length > 0) {

    for (let i = 0; i <= animals.length - 1; i++){//check every animals index name against the animal name

        if (animals[i].name === animal.name) {flag += 1}//- Has a **unique** name, meaning no other animals have that name.
        }//closing for loop 
    }//closing for if conditionals
    if (flag === 0) {animals.push(animal)} //- Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
