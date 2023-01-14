import Main from './Main.svelte';

const main = new Main({
  // target: document.getElementById('app'), // vite
  target: document.body, // rollup
});

export default main;
