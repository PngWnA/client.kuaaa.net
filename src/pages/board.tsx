import React from "react"
import PostList from "../components/postList";

function Board() {

    const postList = [
        {
            id: 1,
            author: 'Choi Huiwon',
            title: '술 먹을 사람~~ 1/4',
            view: 1004,
            createdAt: new Date().toISOString().split('T')[0]
        },
        {
            id: 2,
            author: 'Lee Gunwoo',
            title: '대학원 가는 법',
            view: 1,
            createdAt: new Date().toISOString().split('T')[0]
        },
    ];

    return (
        <PostList postList={postList}/>
    );
}

export default Board;