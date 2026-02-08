// Optional chaining and nullish coalescing.
const user = { profile: { city: "Manila" } };

const city = user?.profile?.city ?? "Guest";
const phone = user?.profile?.phone ?? "N/A";

console.log(city);
console.log(phone);
// Output:
// Manila
// N/A
