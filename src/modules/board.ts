import { ActionType, createReducer } from "typesafe-actions"
import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";

const BOARD_SAVE = 'board/SAVE';
const BOARD_REMOVE = 'board/REMOVE';
const BOARD_READ = 'board/read';
const BOARD_LIST = 'board/list';

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
    articles: {id: number, author: string, title: string, view: number, createdAt: Date}[];
}

const initialState: BoardState = {
    maxNo: 10,
    articles: [
        {
            id: 1,
            author: 'Choi Huiwon',
            title: '술 먹을 사람~~ 1/4',
            view: 1004,
            createdAt: new Date()
        },
        {
            id: 2,
            author: 'Lee Gunwoo',
            title: '대학원 가는 법',
            view: 1,
            createdAt: new Date()
        },
    ]
}

const boardReducer = createReducer<BoardState, BoardAction>(initialState, {
    [BOARD_SAVE]: state => state,
    [BOARD_REMOVE]: state => state,
    [BOARD_READ]: state => state,
    [BOARD_LIST]: state => state,
});

export default boardReducer;