// Modern web shifts: AI-first, edge-native, real-time features.
// Explanation: Real-time updates often use websockets; here we simulate updates.
let likes = 0;
const timer = setInterval(() => {
    likes += 1;
    console.log("likes:", likes);
    if (likes >= 3) {
        clearInterval(timer);
    }
}, 1000);
// Output:
// likes: 1
// likes: 2
// likes: 3
