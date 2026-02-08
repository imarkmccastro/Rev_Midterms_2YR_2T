// Vue basics: template syntax and events.
// Walkthrough:
// 1) Store a Vue template as a string.
// 2) Show interpolation and click handling.
// 3) Print the snippet.
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
