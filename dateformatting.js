const now = new Date();
console.log(now); // Outputs the current date and time

// Using Parameters:
const date = new Date(2024, 11, 13, 10, 30); // Year, Month (0-based), Day, Hour, Minute
console.log(date); // Output: Fri Dec 13 2024 10:30:00 GMT+0530

// Default toString() Format
const now = new Date();
console.log(now.toString()); // Outputs the date and time in a human-readable format

//ISO 8601 Format
const now = new Date();
console.log(now.toISOString());
// Example Output: "2024-12-13T05:00:00.000Z" 


// Time Zones...>JavaScript Date works in local time by default. For timezone support, consider libraries like luxon or date-fns-tz.
const now = new Date();
console.log(now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
// Example Output: "12/13/2024, 10:30:00 AM"

