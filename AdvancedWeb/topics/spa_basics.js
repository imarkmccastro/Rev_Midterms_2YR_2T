// SPA basics: simple hash-based routing.
// Walkthrough:
// 1) Map hashes to views.
// 2) Render based on the current hash.
// 3) Re-render on hash changes.
const routes = {
    "#home": "Home page",
    "#about": "About page",
};

function render() {
    const view = routes[location.hash] || "Not found";
    console.log(view);
}

window.addEventListener("hashchange", render);
render();
// Output:
// Home page (when URL hash is #home)
