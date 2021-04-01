import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as typesCRUD from '../../redux/actions/crudNoteAction';

function ListNote(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(typesCRUD.getData());
    }, [dispatch]);

    const {data} = useSelector((state) => state.notes);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
        {
            data ? <Table key={data.id} columns={columns} dataSource={data} /> : <center>Loading...</center>
        }
        </>
    );
}

export default ListNote;