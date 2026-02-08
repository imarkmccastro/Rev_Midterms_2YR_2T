// React basics: component, JSX, props, state.
const componentExample = `
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

const element = (
  <div className="container">
    <Welcome name="John" />
  </div>
);
`;

console.log(componentExample.trim());
// Output:
// (JSX snippet printed as text)
