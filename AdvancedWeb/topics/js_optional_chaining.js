// Optional chaining and nullish coalescing.
// Walkthrough:
// 1) Create a nested object.
// 2) Safely read nested values (?. stops if null/undefined).
// 3) Use ?? to provide defaults only when value is null or undefined.
const user = { profile: { city: "Manila" } };

const city = user?.profile?.city ?? "Guest";
const phone = user?.profile?.phone ?? "N/A";

console.log(city);
console.log(phone);
// Output:
// Manila
// N/A
