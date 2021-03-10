import {ActionType, createReducer, createAction} from "typesafe-actions";

export type CurrentPageState = {
    currentPage: string,
    headerMenuItemKey: string,
    sideBarMenuItemKey: string
}

const CURRENT_PAGE = 'page/CURRENT_PAGE';
export const currentPage = createAction(CURRENT_PAGE)<{
    currentPage: string,
    headerMenuItemKey?: string,
    sideBarMenuItemKey?: string
}>();

const actions = {currentPage};
type CurrentPageAction = ActionType<typeof actions>;

const initialState: CurrentPageState = {
    currentPage: "home",
    headerMenuItemKey: "1",
    sideBarMenuItemKey: "1"
};

const pageReducer = createReducer<CurrentPageState, CurrentPageAction>(initialState, {
    [CURRENT_PAGE]: (state, action) => {
        let newState = {
            ...state,
            currentPage: action.payload.currentPage
        };
        if(action.payload.headerMenuItemKey !== undefined) {
            newState.headerMenuItemKey = action.payload.headerMenuItemKey;
        }
        if(action.payload.sideBarMenuItemKey !== undefined) {
            newState.sideBarMenuItemKey = action.payload.sideBarMenuItemKey;
        }

        return newState;
    }
});

export default pageReducer;