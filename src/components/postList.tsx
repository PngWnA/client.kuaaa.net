import React from "react";
import {Table} from "react-bootstrap";
import {PostInfo} from "../modules/postList";

type PostListProps = {
    postList: PostInfo[];
}

function PostList({ postList }: PostListProps) {
    if(postList?.length === 0) return <p>등록된 항목이 없습니다.</p>;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
            {postList.map(post => (
                <tr key={post.id} className="article">
                    <td className="seq">
                        {post.id}
                    </td>
                    <td className="title">
                        {post.title}
                    </td>
                    <td className="author">
                        {post.author}
                    </td>
                    <td className="createAt">
                        {post.createdAt}
                    </td>
                    <td className="view">
                        {post.view}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default PostList;