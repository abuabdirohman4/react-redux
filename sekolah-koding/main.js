// Aplikadi Redux

// Store(reducer)
let store = Redux.createStore(counter);

// Reducer(state, action)
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      return state - 1;
      break;
    default:
      break;
  }
}

// Subscribe
store.subscribe(() => console.log('state saat ini ...', store.getState()));

// Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
