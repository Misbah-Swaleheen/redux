// Redux architecture
import store from "./store";

const unsubscibe = store.subscribe(() => {
    console.log('Store Changed!', store.getState());
})

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "bug1"
    }
});

// when we unsubscribe we won't get notified when store changed
unsubscibe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});

console.log(store.getState());