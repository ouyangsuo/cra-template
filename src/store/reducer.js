import { SET_USERNAME, SET_FETCHING } from "./actions";
import { combineReducers } from "redux";

/* 
{
    username:null,
    isFetching:false
}
*/

function username(prevState = null, action) {
    switch (action.type) {
        case "SET_USERNAME":
            return action.username;
            
        default:
            return prevState;
    }
}

function isFetching(prevState = false, action) {
    switch (action.type) {
        case "SET_FETCHING":
            return action.value;

        default:
            return prevState;
    }
}

const rootReducer = combineReducers({ isFetching, username });
export default rootReducer;
