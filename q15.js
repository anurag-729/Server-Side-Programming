/*Q15. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
*/

function displayClock() {
    // Get the current time
    const now = new Date();

    // Get hours, minutes, and seconds from the current time
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());

    // Display the time in "HH:MM:SS" format
    console.log(hours + ":" + minutes + ":" + seconds);
}

function formatTimeUnit(unit) {
    // Add leading zero if the unit is less than 10
    return unit < 10 ? "0" + unit : unit;
}

// Update the clock every second
setInterval(displayClock, 1000);

/*OUTPUT
---------
19:30:15
19:30:16
19:30:17
19:30:18
19:30:19
19:30:20
19:30:21
19:30:22
19:30:23
19:30:24
19:30:25
---------
*/