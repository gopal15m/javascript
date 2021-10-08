//# Write a JavaScript program to display the current day and time in the following format.
//# Today is: Tuesday.
//# Current time is: 10 PM: 30 : 38

//function dateFromat() {
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var preapand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && preapand === ' PM ') {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        preapand = ' Noon';
    } else {
        hour = 12;
        preapand = ' PM'
    }
}
if (hour === 0 && preapand === ' AM') {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        preapand = ' Midnight'
    } else {
        hour = 12;
        preapand = ' AM';
    }
}

console.log("Current Time : " + hour + preapand + " : " + minutes + " : " + seconds);
//}