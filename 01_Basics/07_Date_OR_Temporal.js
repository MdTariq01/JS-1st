// Create a date
const now = new Date();
console.log(now); // current date and time

// Specific date
const d1 = new Date(2025, 7, 28);  // Months are 0-based (7 = August)
console.log(d1);

// Common methods
console.log(now.getFullYear());   // 2025
console.log(now.getMonth());      // 7 (August, because months are 0-11)
console.log(now.getDate());       // Day of month
console.log(now.getDay());        // Day of week (0=Sunday, 6=Saturday)
console.log(now.getHours());      
console.log(now.toISOString());   // 2025-08-28T17:30:00.000Z


// Using Temporal (if available or via polyfill)

const plainDate = new Date('01,13,2025')

const today = plainDate.from('2025-08-28');
console.log(today.year);   // 2025
console.log(today.month);  // 8
console.log(today.day);    // 28

const now1 = now1.plainDateTimeISO();
console.log(now.toString()); // 2025-08-28T23:05:00
