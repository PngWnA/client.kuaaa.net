import React from "react"
import 'antd/dist/antd.css'
import { Table } from 'antd'

type ArticleTableBodyProps = {
    columns: {
        title: string;
        dataIndex: string;
        key: string;
        render?: (...argument: any) => React.ReactElement;
    }[],
    data: { [k: string]: string | number }[];
}

function ArticleTableBody({columns, data}: ArticleTableBodyProps) {
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default ArticleTableBody;