import { combineReducers } from 'redux'
import pageReducer from "./page";

const rootReducer = combineReducers({
    page: pageReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;