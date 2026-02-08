// React basics: component, JSX, props, state.
// Walkthrough:
// 1) Store a React snippet as a string.
// 2) Show a component and JSX usage.
// 3) Print the snippet.
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
