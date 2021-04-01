import './App.css';
import 'antd/dist/antd.css'; 
import React from 'react';
import { Row, Col, Divider } from 'antd';
import ListNote from './components/crudNote/ListNote';
import FormNote from './components/crudNote/FormNote';

function App() {
  return (
    <Row>
      <Col span={12} xs={{ order: 24 }} sm={{ order: 24 }} md={{ order: 12 }} lg={{ order: 12 }}>
        <ListNote/>
      </Col>
      <Col span={12} xs={{ order: 24 }} sm={{ order: 24 }} md={{ order: 12 }} lg={{ order: 12 }}>
        <FormNote/>
      </Col>
    </Row>
  );
}

export default App;