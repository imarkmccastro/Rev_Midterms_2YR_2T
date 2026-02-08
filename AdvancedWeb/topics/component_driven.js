// Component-driven idea: small, reusable UI pieces.
function Button({ label, variant }) {
    const className = variant === "primary" ? "btn btn-primary" : "btn";
    return `<button class=\"${className}\">${label}</button>`;
}

const html = Button({ label: "Save", variant: "primary" });
console.log(html);
// Output:
// <button class="btn btn-primary">Save</button>
