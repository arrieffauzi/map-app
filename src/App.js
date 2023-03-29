import logo from './logo.svg';
import './App.css';
import { Col, Row } from 'antd';
import SideMenu from './components/sideMenu';

function App() {
  return (
    <div className="app">
      <Row className='full-height'>
        <Col span={8}>
          <SideMenu/>
        </Col>
        <Col span={16}>Content</Col>
      </Row>
    </div>
  );
}

export default App;
