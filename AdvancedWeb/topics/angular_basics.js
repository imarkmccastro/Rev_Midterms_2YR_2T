// Angular basics: component decorator and template.
// Walkthrough:
// 1) Store a component snippet as a string.
// 2) Show selector, template, and class.
// 3) Print the snippet.
const angularExample = `
@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
  title = 'Hello Angular';
}
`;

console.log(angularExample.trim());
// Output:
// (Angular component snippet printed as text)
