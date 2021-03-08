import React from "react"
import PostList from "../components/postList";
import ArticleTableBody from "../components/ArticleTableBody";

function Board() {
    const articleColumns = [
        {
            title: "작성자",
            dataIndex: "author",
            key: "author"
        },
        {
            title: "제목",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "조회수",
            dataIndex: "view",
            key: "view"
        },
        {
            title: "작성일",
            dataIndex: "createdAt",
            key: "createdAt"
        }
    ]

    const articleList = [
        {
            id: 1,
            author: 'Choi Huiwon',
            title: '술 먹을 사람~~ 4/4',
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
        <ArticleTableBody columns={articleColumns} data={articleList}/>
    );
}

export default Board;