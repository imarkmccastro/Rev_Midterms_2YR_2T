// Component-driven idea: small, reusable UI pieces.
// Walkthrough:
// 1) Build a reusable Button function.
// 2) Choose a class based on props (variant).
// 3) Return an HTML string and log it.
function Button({ label, variant }) {
    const className = variant === "primary" ? "btn btn-primary" : "btn";
    return `<button class=\"${className}\">${label}</button>`;
}

const html = Button({ label: "Save", variant: "primary" });
console.log(html);
// Output:
// <button class="btn btn-primary">Save</button>
