import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Menu className="mb-0" />
      <Container className="paginaPrincipal my-3">
        <Row className="g-3 mb-3">
          <Sidebar />
          <Col md={9}>
            <aside className="flex-grow-aside">
              <h1 className="fw-bold mb-3">Main</h1>
            </aside>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
