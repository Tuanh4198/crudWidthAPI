import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  TimePicker 
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';


function FormNote() {

    const format = 'HH:mm';
    const { TextArea } = Input;
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    let [ title, setTitle ] = useState('');
    let [ content, setContent ] = useState('');
    let [ time, setTime ] = useState('');
    let [ img, setImg ] = useState('');

    const postData = () => {
        console.log(`${title} ${content} ${time}`);
        console.log('ok');
    };

    const FormSizeDemo = () => {
        return (
            <>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 10,
                    }}
                >
                    <Form.Item label="Title">
                        <Input placeholder="Enter Title" name="title" 
                            // onChange={(e) => setTitle(e.target.value)} 
                            // value={title}
                        />
                    </Form.Item>
                    <Form.Item label="Content">
                        <TextArea rows={4} placeholder="Enter Content" name="content" 
                            // onChange={(e) => setContent(e.target.value)}
                            // value={content}
                        />
                    </Form.Item>
                    <Form.Item label="Time">
                        <TimePicker format={format} name="time" 
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                        />
                    </Form.Item>
                    <Form.Item label="Upload file">
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <center> <Button onClick={() => postData()}>Submit</Button> </center>
                    </Form.Item>
                </Form>
            </>
        );
    };

    return (
        <div>
            <FormSizeDemo />
        </div>
    );
}

export default FormNote;