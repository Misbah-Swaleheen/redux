// Redux architecture
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";



const unsubscibe = store.subscribe(() => {
    console.log('Store Changed!', store.getState());
})

store.dispatch(bugAdded('bug1'));

// when we unsubscribe we won't get notified when store changed
// unsubscibe();
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));

console.log(store.getState());


