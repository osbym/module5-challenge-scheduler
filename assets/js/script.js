const today = new Date();

var month = today.toLocaleString('default', {month: 'long'});
var dayNum = today.getDate();

var todayOutput = month + " " + dayNum + "," + today.getFullYear();

var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

var weekday = today.getDay();

$('#currentDay').text("Today is: " + weekdays[weekday] + " " + todayOutput);

// Get Input text with the save button
var agenda = JSON.parse(localStorage.getItem("agenda")) || {};

$(".saveBtn").on('click', function(event) {
// this gets the closest class = row
var row = $(this).closest('.row');
// this looks within the row class for the next input box
var input = row.find('input[type=text]');
// finds id of searched input
var inputID = input.attr('id');
agenda[inputID] = input.val();
localStorage.setItem("agenda", JSON.stringify(agenda));

});

// look for all input fields with a text type & print on time row
$(":text").each(function() {
    const id = $(this).attr('id');
    console.log(id + ': ', agenda[id]);
    $(this).val(agenda[id]);
});

// Color code events: past, present, future
var currentTime = moment().format('h a');
$(".time-item").each(function() {
    // find all of the time-item elements
    // loop through each time-item to get h4
    // use moment.js to convert selected time

    const timeName = $(this).closest('.row');
    // this looks with the row class the next input box
    var input = row.find('input[type=text]');
    if(inputTime < currentTime){
        input.css("background-color", "lightgrey")
    }
    else if (inputTime > currentTime) {
        input.css("background-color", "#81d64f")
    }else {input.css("background-color", "#ed5a5a")}

});
