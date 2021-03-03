import { ActionType, createReducer } from "typesafe-actions"
import { deprecated } from "typesafe-actions";
import {PostInfo} from "./postList";

const { createStandardAction } = deprecated;

const BOARD_SAVE = 'board/SAVE';
const BOARD_REMOVE = 'board/REMOVE';
const BOARD_READ = 'board/READ';
const BOARD_LIST = 'board/LIST';

export const board_save = createStandardAction(BOARD_SAVE)();
export const board_remove = createStandardAction(BOARD_REMOVE)();
export const board_read = createStandardAction(BOARD_READ)();
export const board_list = createStandardAction(BOARD_LIST)();

const actions = {
    board_save,
    board_remove,
    board_read,
    board_list
};

type BoardAction = ActionType<typeof actions>;

type BoardState = {
    maxNo: number;
    articles: PostInfo[];
}

const initialState: BoardState = {
    maxNo: 10,
    articles: [
    ]
}

const boardReducer = createReducer<BoardState, BoardAction>(initialState, {
    [BOARD_SAVE]: state => state,
    [BOARD_REMOVE]: state => state,
    [BOARD_READ]: state => state,
    [BOARD_LIST]: state => state,
});

export default boardReducer;