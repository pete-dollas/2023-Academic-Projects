let app = {};
// DO NOT REMOVE CODE ABOVE ////////////////////////////////

////////////////////////////////////////////////////////////
/////////////////// BOOTCAMP - WEEK 3 //////////////////////
////////////////// EXIT EXAM PRACTICE //////////////////////
////////////////////////////////////////////////////////////

/*
Welcome to SchedHead, the internet's top meeting and appointment setting application. As a software developer with SchedHead, you will work on implementing some new features.
*/

// sample data
const meetings = [
  {
    agenda: "Maryland Trip",
    date: "February 25, 2022",
    meetingTime: "10:00AM",
    participants: ["Kyle", "Stan", "Nicole"]
  },
  {
    agenda: "Grant Reporting Requirements",
    date: "March 1, 2022",
    meetingTime: "1:00PM",
    participants: ["Kyle", "Vickie", "Sean"]
  },
  {
    agenda: "Grant Reporting Requirements",
    date: "March 2, 2022",
    meetingTime: "1:00PM",
    participants: ["Vickie", "Stephanie", "Stan"]
  },
  {
    agenda: "Exterior Repairs",
    date: "March 10, 2022",
    meetingTime: "4:30PM",
    participants: ["Stan", "Vickie", "John"]
  }
];

/////////////////////// PROBLEM #1 //////////////////////////
/*
Directions: Create a function called getMeetingBySpecs. This function will take three parameters - array, agenda, date. Array will be an array of meeting objects; agenda will be a string representing an agenda heading for a meeting; date will be a string representing the month, day, and year the meeting is scheduled. This function should search through the input array and find the meeting matching the input agenda and input date. "
*/

function getMeetingBySpecs(array, agenda, date) {
  //Array will be an array of meeting objects; 
  //agenda will be a string representing an agenda heading for a meeting; 
  //date will be a string representing the month, day, and year the meeting is scheduled.

  //This function should search through the input array and find the meeting matching the input agenda and input date. "

 for (let i = 0; i <= array.length - 1; i++) {
    let counter = 0//starts at 0 and will count number of failed validations
    if (array[i]["agenda"] === agenda && array[i]["date"] === date) {return array[i]}
  else {counter++}//each loop that fails a validation adds 1 to the counter
  if (counter === array.length)  {//if counter == array length it means every loop failed to make a match
    return "no meeting found matching those specifications."}
}//for loop close
};//function close
console.log(getMeetingBySpecs(meetings, "Exterior Repairs", "March 10, 2022"))
/////////////////////// PROBLEM #2 //////////////////////////
/*
Directions: The CEO of SchedHead wants to apply a one-time gift to every other meeting scheduled in the SchedHead database. The CEO wants to remove the last meeting attendee from every other meeting scheduled and give them that meeting time off. Create the function called removeMeetingAttendees that takes in one parameter - array. Array represents an array of meeting objects. This function should iterate through the input array and access EVERY OTHER MEETING and remove the last meeting participant from the participants array of each meeting object.
*/

var removeMeetingAttendees;

/////////////////////// PROBLEM #3 //////////////////////////
/*
Directions: Create a function called printMeetingInfo that takes in one parameter - meeting. Meeting represents a meeting object like the objects that appear in the meetings array above. This function should access the agenda, date, and meetingTime properties to print a string like this to the console: 
- "The <agenda> meeting will be taking place <date> at <meetingTime>."
- example: printMeetingInfo(meetings[0]); LOGS => "The Maryland Trip meeting will be taking place February 25, 2022 at 10:00AM."
*/

var printMeetingInfo = function() {
  
};

/////////////////////// PROBLEM #4 //////////////////////////
/*
Directions: Create a function called getMeetingHead that takes in three parameters - array, date, time. Array represents an array of meeting objects; date represents a string of the month, day, and year of the meeting; time represents a string of the hour that meeting is taking place. This function should iterate through input array and find the meeting object whose date and meetingTime properties match the input date and time. When a match is found, the function should return the "meeting head". In this case, you can assume that the person listed at the zero index of the participants array is the "meeting head."
- example: getMeetingHead(meetings, "February 25, 2022", "10:00AM") => "Kyle"
*/

var getMeetingHead;

/////////////////////// PROBLEM #5 //////////////////////////
/*
Directions: Create a function called isParticipant that takes in 5 parameters - array, agenda, date, meetingTime, and participant. Array represents an array of meeting objects; agenda is a string of the meeting agenda; date is a string representing the month, day, and year of the meeting, meetingTime is a string of the hour the meeting is taking place; participant is a string of a person's name who may or may not be a participant in that meeting. This function should iterate throug the input array and find the meeting whose agenda, date, and meetingTime properties matches the input parameters. When the match is found, the function should return true if the input participant is found the participant's array of the object. Is the participant is not found, the function should return false.
- example: isParticipant(meetings, "Maryland Trip", "February 25, 2022", "10:00AM", "Kyle") => true
- example: isParticipant(meetings, "Maryland, Trip", "February 25, 2022", "10:00AM", "Vickie") => false
*/

var isParticipant;

// DO NOT REMOVE CODE BELOW //////////////////////////////////

app.getMeetingBySpecs = getMeetingBySpecs;
app.removeMeetingAttendees = removeMeetingAttendees;
app.printMeetingInfo = printMeetingInfo;
app.getMeetingHead = getMeetingHead;
app.isParticipant = isParticipant;

module.exports = app;




  


