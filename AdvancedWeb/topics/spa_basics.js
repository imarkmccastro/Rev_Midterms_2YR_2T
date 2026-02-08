// SPA basics: simple hash-based routing.
// Note: Lazy loading and route guards do not prevent page reloads; SPA routing does.
// Walkthrough:
// 1) Map URL hashes to views.
// 2) Render based on the current hash.
// 3) Re-render on hash changes with the hashchange event.
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
