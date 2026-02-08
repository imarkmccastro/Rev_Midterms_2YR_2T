// Optional chaining and nullish coalescing.
// Walkthrough:
// 1) Create a nested object.
// 2) Safely read nested values (?. stops if null/undefined).
// 3) Use ?? to provide defaults only when value is null or undefined.
const user = { profile: { city: null } };

const city = user?.profile?.city ?? "Guest"; // city is null, so default "Guest" is used.
const phone = user?.profile?.phone ?? "N/A";

console.log(city);
console.log(phone);
// Output:
// "Guest"
// N/A
