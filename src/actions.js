import * as actions from './actionTypes';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
            payload: {
                description // description: description (same) => description (also accepted) 
            }
}) ;

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
            payload: {
                id
            }
}) ;

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: description
//         }
//     }
// }

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    }
}