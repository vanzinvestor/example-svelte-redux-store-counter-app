<script lang="ts">
  import { fromCounterCreators } from './store/creators';
  import {
    useDispatch,
    useSelector,
    useStore,
    useSubscribe,
    type AppState,
  } from './store/store';
  const store = useStore();
  // const dispatch = useDispatch();

  const decrement = () => {
    store.dispatch(fromCounterCreators.decrement());
    // dispatch(decrement());
  };

  const increment = () => {
    store.dispatch(fromCounterCreators.increment());
    // dispatch(increment());
  };

  const count = store.selector((state: AppState) => state.counts.count);

  // const count = useSelector((state: AppState) => state.counts.count);

  // let count:number
  // store.subscribe((state:AppState) => { count = state.counts.count })

  // let count:number
  // useSubscribe((state:AppState) => { count = state.counts.count })
</script>

<div class="app">
  <div class="home">
    <h1>Svelte State Management With Redux</h1>
    <div class="list">
      <div class="list-item">
        <p>Counter:</p>
        <div class="btn-group">
          <button class="btn" on:click={decrement}> - </button>
          <!-- USE SELECTOR -->
          <p>{$count}</p>
          <!-- USE SUBSCRIBE -->
          <!-- <p>{count}</p> -->
          <button class="btn" on:click={increment}> + </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style type="scss">
  .app {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .home {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

  .btn-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
  }

  .btn-group p {
    padding: 10px;
  }

  .btn {
    padding: 5px 15px;
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: #eee;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #ccc;
    transition: all 0.3 ease-in-out;
  }

  .btn:disabled {
    background-color: #f2f2f2;
    pointer-events: none;
  }
</style>
