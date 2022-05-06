import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

// export const stateTree = {
//     username: null,
//     isFetching: false,
// };

const store = createStore(
    rootReducer,

    /* 在action达到reducer前 先经过两个中间件处理 */
    applyMiddleware(thunk, createLogger())
);

export default store
