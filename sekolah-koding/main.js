// Aplikadi Redux

// Store(reducer)
// let store = Redux.createStore(counter);

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    // unsubscribe
    return () => {
        listeners = listeners.filter(l => listener)
    }
  };

  dispatch({})

  return {getState, dispatch, subscribe}
};

let store = createStore(counter);

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
store.subscribe(() => console.log("state saat ini ...", store.getState()));

// Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
