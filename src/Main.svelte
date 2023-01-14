<script lang="ts">
  import { Provider } from 'svelte-redux-store';
  import App from './App.svelte';
  import { store } from './store/store';
</script>

<Provider {store}>
  <App />
</Provider>
