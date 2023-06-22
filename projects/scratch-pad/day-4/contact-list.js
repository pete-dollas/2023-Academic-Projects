// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {//input number, string, string
    let Contact = {//create object with key/values of each parameter and argument
      "id": id,
      "nameFirst": nameFirst,
      "nameLast": nameLast
    }
    return Contact;//return the output
} 


function makeContactList() {//accepts an input of number(id), string(nameFirst), string(nameLast)
    var contactList = []; //this is an array to hold the contact objects;
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contactList.length;
        },
        addContact: function(contact) { //input a contact via makeContact and its 3 associated parameters
          contactList.push(contact);//push this object to the contact list array
        },
        findContact: function(fullName) {//input a contact via makeContact and its 3 associated parameters
            for (let i = 0; i <= contactList.length - 1; i++) {//loop through contact list array by indexed objects
                //if fullName string matches an object first and last name, return the indexed object
                if (fullName === contactList[i]["nameFirst"] + " " + contactList[i]["nameLast"]) {return contactList[i]}
                else {return undefined}//else return undefined
            }//closing braces to for loop within findContact
        },//closing braces to findContact
        removeContact: function(contact) {//input a contact via makeContact and its 3 associated parameters
            for (let i = 0; i <= contactList.length - 1; i++) {//loop through contact list array by indexed objects
            //CONTACT PARAMETER IS TAKING THIS AS AN ARGUMENT: contacts.findContact('firstname lastname')
            //it is returning the full object from within the contact list array
            //cannot use delete [i] because it leaves an unoccupied space;
            //Use splice ([i], 1) (i is the item targeted, 1 item deleted)
                if (contact === contactList[i]) {contactList.splice([i], 1)}

            }
        },//end of removeContact function
        printAllContactNames: function() {
            let output = ""  //holding string for the looped values below
            for (let i = 0; i <= contactList.length - 1; i++) {//loop through contact list array by indexed objects)  
              if (i === contactList.length - 1) {//if it is the last one, just print first and last name
                      output+= contactList[i].nameFirst + " " + contactList[i].nameLast
                  }
                  else {//otherwise, print first and last name followed by a line break 
                      output+= contactList[i].nameFirst + " " + contactList[i].nameLast + "\n"
                  }
              }//end of for loop
            return output;//return a string output of all the names
          }//end of printAllContactNames function
    }
}//end of makeContactList function
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
