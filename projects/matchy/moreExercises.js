var data = { 
  results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.

  console.log(data.results.length);

  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order. ALPHABETICAL OR IN ORDER OF APPEARANCE?
  function animalNamesAlphabetized(data) { //input an object with 1 key and a value of 1 array containing objects
    let output = [];
    let results = data.results//storage container for all animal names to be returned
      for (let i = 0; i <= results.length - 1; i++) {//loop through each object in the array 
        output.push(results[i].animal)  //push the name to the storage array
      }//for loop name collector closure
    for (let j = 0; j <= output.length - 1; j++) {
     console.log(output.sort()[j]); 
    }
  }//function close
  

function animalNamesOrderofAppearance(data){
  let results = data.results//storage container for all animal names to be returned
    for (let i = 0; i <= results.length - 1; i++) {//loop through each object in the array 
      console.log(results[i].animal) } //print each animal name as it appears
}//function close

  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.

  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0

  function animalNamesOrderofAppearance(data){
    let results = data.results//storage container for all animal names to be returned
      for (let i = 0; i <= results.length - 1; i++) {//loop through each object in the array 
        console.log(`Name: ${results[i].animal.slice(0,1).toUpperCase()}${results[i].animal.slice(1)}, Legs: ` + results[i].numberOfLegs) 
      }//print each animal name as it appears
  }//function close
  animalNamesOrderofAppearance(data)



  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  // Your result should look like this:

  let newArr = [];//holding pen for new array of nested objects
  function newResults(data) {
    let results = data.results//storage container for all animal names to be returned
   
    for (let i = 0; i <= results.length - 1; i++) {//loop through each object in the array 
      newArr.push({Name: "", Legs: ""});
      newArr[newArr.length - 1].Name = `${results[i].animal.slice(0,1).toUpperCase()}${results[i].animal.slice(1)}`; 
      newArr[newArr.length - 1].Legs = results[i].numberOfLegs;
    }
    return newArr;//return the new array
  }
    console.log(newResults(data))
  console.log(newArr)
 

  // For another search result, console.log the animals whose matches are 'fish'
  let fishMatches = [];//holding pen for new array of nested fish objects
  function fishResults(data) {
    let results = data.results//storage container for all animal names to be returned
    for (let i = 0; i <= results.length - 1; i++) {//loop through each object in the array 
      if (results[i].animal === "fish") {
        fishMatches.push({Name: "", Index: ""});
        fishMatches[fishMatches.length - 1].Name = `${results[i].animal.slice(0,1).toUpperCase()}${results[i].animal.slice(1)}`; 
        fishMatches[fishMatches.length - 1].Index = i;
      }//end of if check
    }//end of for loop
    return fishMatches;//return the new array
  }//end of fishResults
  console.log(fishResults(data))
  // Next, add it to an array called 'FishMatches'. 
  // Make each match an object with two properties 'name' and 'index'
  // Your end result should look like this:
 // var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];
