// Promises and async/await.
// Walkthrough:
// 1) Create a helper that resolves after a delay.
// 2) Use async/await to pause until a Promise resolves (reads like sync code).
// 3) Show Promise helpers: race (first wins), allSettled (all results), any (first success).
function wait(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function run() {
    const a = await wait(200, "A");
    const b = await wait(100, "B");
    console.log(a + b);

    const first = await Promise.race([wait(50, "fast"), wait(200, "slow")]);
    console.log(first);

    const all = await Promise.allSettled([wait(10, "ok"), Promise.reject("fail")]);
    console.log(all[0].status, all[1].status);

    const any = await Promise.any([Promise.reject("x"), wait(10, "y")]);
    console.log(any);
}

run();
// Output:
// AB
// fast
// fulfilled rejected
// y
