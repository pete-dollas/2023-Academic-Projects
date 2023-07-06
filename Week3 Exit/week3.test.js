var assert = require('assert');
var expect = require('chai').expect;
require('mocha-sinon');
let app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;







/////////////////////////// SAMPLE DATA //////////////////////////////
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

//////////////////////////////////////////////////////////////////////

describe('#getMeetingBySpec', function(){
  it('should return object if it matches input specs', function(){
    assert.deepEqual(app.getMeetingBySpecs(meetings, "Grant Reporting Requirements", "March 1, 2022"), {
      agenda: "Grant Reporting Requirements",
      date: "March 1, 2022",
      meetingTime: "1:00PM",
      participants: ["Kyle", "Vickie", "Sean"]
    });
  });
  it('should return output string if no object matches specs', function(){
    assert.equal(app.getMeetingBySpecs(meetings, 'Wrong Agenda', 'Month Day, Year'), 'no meeting found matching those specifications');
  })
});

describe('#removeMeetingAttendees', function(){
  it('should remove the last participant from every other meeting object', function(){
    app.removeMeetingAttendees(meetings);
    assert.equal(meetings[0].participants.length, 2);
    assert.equal(meetings[2].participants.length, 2);
    assert.equal(meetings[0].participants.includes('Nicole'), false);
    assert.equal(meetings[2].participants.includes('Stan'), false);
  });
});

describe('#printMeeetingInfo', function(){
  const inspect = stdout.inspect();
  app.printMeetingInfo(meetings[1]);
  inspect.restore();
  it('should print a string to the console', function(){
    assert.equal(typeof inspect.output[0], 'string');
  });
  it('should print a string that matches the correct meeting object', function(){
    assert.equal(inspect.output[0], 'The Grant Reporting Requirements meeting will be taking place March 1, 2022 at 1:00PM.\n')
  })
});

describe('#getMeetingHead', function(){
  it('should return a string', function(){
    assert.equal(typeof app.getMeetingHead(meetings, 'March 1, 2022', '1:00PM'), 'string');
  });
  it('should return the correct meeting head', function(){
    assert.equal(app.getMeetingHead(meetings, 'March 1, 2022', '1:00PM'), 'Kyle');
  });
});

describe('isParticipant', function(){
  it('should return a boolean', function(){
    assert.equal(typeof app.isParticipant(meetings, 'Grant Reporting Requirements', 'March 1, 2022', '1:00PM', 'Kyle'), 'boolean');
  });
  it('should return true if the input name is a participant', function(){
    assert.equal(app.isParticipant(meetings, 'Grant Reporting Requirements', 'March 1, 2022', '1:00PM', 'Kyle'), true);
  });
  it('should return false if the input name is not a participant', function(){
    assert.equal(app.isParticipant(meetings, 'Grant Reporting Requirements', 'March 1, 2022', '1:00PM', 'Stan, Sr.'), false);
  });
});


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