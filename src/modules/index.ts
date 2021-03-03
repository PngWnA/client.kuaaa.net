import { combineReducers } from 'redux'
import boardReducer from "./board";

const rootReducer = combineReducers({
    board: boardReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;