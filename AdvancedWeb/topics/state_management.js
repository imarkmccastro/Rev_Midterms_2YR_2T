// State management: share data across components.
const store = {
    state: { count: 0 },
    listeners: [],
    subscribe(fn) { this.listeners.push(fn); },
    setCount(value) {
        this.state.count = value;
        this.listeners.forEach(fn => fn(this.state));
    },
};

store.subscribe(state => console.log("count:", state.count));
store.setCount(1);
store.setCount(2);
// Output:
// count: 1
// count: 2
