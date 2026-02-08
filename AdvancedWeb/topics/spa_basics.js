// SPA basics: simple hash-based routing.
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
