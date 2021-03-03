import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    board: boardReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;