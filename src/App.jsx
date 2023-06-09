import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <h1 className="border border-danger">Sidebar</h1>
        <h1 className="border border-success">Main</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
