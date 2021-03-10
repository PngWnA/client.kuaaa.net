import React, {useEffect} from "react"
import ArticleTableBody from "../components/ArticleTableBody";

import './board.scss'

import {Layout, Breadcrumb} from "antd";
import {useDispatch} from "react-redux";
import {currentPage} from "../modules/page";

const {Content} = Layout;

function Board() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentPage({
            currentPage: 'board',
            headerMenuItemKey: '3',
            sideBarMenuItemKey: '1'
        }));
    }, [dispatch]);

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
        <React.Fragment>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Board</Breadcrumb.Item>
                <Breadcrumb.Item>Board1</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <ArticleTableBody columns={articleColumns} data={articleList}/>
            </Content>
        </React.Fragment>
    );
}

export default Board;