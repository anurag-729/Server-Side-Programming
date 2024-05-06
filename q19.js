/*Q19. Write a JavaScript function that returns the number of minutes 
in hours and minutes.
Input :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."

*/

function timeConvert(minutes) {
    // Calculate hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    // Construct the output string
    const output = `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
    
    return output;
}

// Example usage:
console.log(timeConvert(200));

/*OUTPUT
---------
200 minutes = 3 hour(s) and 20 minute(s).
---------
 */