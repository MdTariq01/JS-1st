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

// Temporal is not out in chrome and other browsers so use Date which is inbuilf function

/*
 📖 Temporal API Cheat Sheet

1. Get Current Time

Temporal.Now.instant();          // Exact UTC timestamp
Temporal.Now.plainDateISO();     // Current date (no time) → 2025-08-31
Temporal.Now.plainTimeISO();     // Current time (no date) → 21:15:30
Temporal.Now.zonedDateTimeISO("Asia/Kolkata");
// 2025-08-31T21:15:30+05:30[Asia/Kolkata]


2. PlainDate (Date only, no time)

const date = Temporal.PlainDate.from("2025-08-31");

console.log(date.year);   // 2025
console.log(date.month);  // 8
console.log(date.day);    // 31

console.log(date.add({ days: 10 }).toString()); // 2025-09-10
console.log(date.subtract({ months: 2 }).toString()); // 2025-06-30


3. PlainTime (Time only, no date)

const time = Temporal.PlainTime.from("15:45:30");

console.log(time.hour);   // 15
console.log(time.minute); // 45

console.log(time.add({ minutes: 30 }).toString()); // 16:15:30


4. PlainDateTime (Date + Time, no timezone)

const dt = Temporal.PlainDateTime.from("2025-08-31T20:30");

console.log(dt.toString());  // 2025-08-31T20:30:00
console.log(dt.add({ hours: 5 }).toString()); // 2025-09-01T01:30:00


5. ZonedDateTime (Date + Time + Timezone ✅)

const zdt = Temporal.ZonedDateTime.from("2025-08-31T20:30[Asia/Kolkata]");

console.log(zdt.toString());
// 2025-08-31T20:30:00+05:30[Asia/Kolkata]

console.log(zdt.withTimeZone("America/New_York").toString());
// 2025-08-31T11:00:00-04:00[America/New_York]


6. Instant (Exact timestamp in UTC)

const instant = Temporal.Instant.from("2025-08-31T15:00:00Z");

console.log(instant.epochMilliseconds); // 1756652400000
console.log(instant.epochSeconds);      // 1756652400


7. Duration (Amount of time, not a date)

const dur = Temporal.Duration.from({ days: 2, hours: 5 });

console.log(dur.toString()); // P2DT5H
console.log(dur.total({ unit: "hours" })); // 53 hours


8. Difference Between Dates

const d1 = Temporal.PlainDate.from("2025-08-31");
const d2 = Temporal.PlainDate.from("2025-09-10");

const diff = d2.since(d1);
console.log(diff.toString()); // P10D
console.log(diff.days);       // 10


9. Round / Start of Day

const dt = Temporal.PlainDateTime.from("2025-08-31T20:45:30");

console.log(dt.round({ smallestUnit: "hour" }).toString());
// 2025-08-31T21:00:00

console.log(dt.with({ hour: 0, minute: 0, second: 0 }).toString());
// Start of day → 2025-08-31T00:00:00


✅ Key Takeaways

Use PlainDate / PlainTime → when you only care about date/time.

Use PlainDateTime → date + time (but not timezone).

Use ZonedDateTime → real-world events across time zones.

Use Instant → machine timestamps (always UTC).

Use Duration → time intervals.

Use Temporal.Now → current values.
*/