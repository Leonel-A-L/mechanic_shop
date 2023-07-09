import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

function App() {
  return (
    
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Mechanic Shop LLC!</h1>

          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey={"homePage"}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" eventKey={"aboutPage"}>
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/services" eventKey={"servicesPage"}>
                  Services
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className="display">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;