// Angular basics: component decorator and template.
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
