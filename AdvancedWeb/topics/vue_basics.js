// Vue basics: template syntax and events.
const vueExample = `
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>
`;

console.log(vueExample.trim());
// Output:
// (Vue template snippet printed as text)
