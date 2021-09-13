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
