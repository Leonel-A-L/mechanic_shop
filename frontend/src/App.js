import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import OilChange from './components/OilChange';
import Brakes from './components/Brakes';
import CheckEngineLight from './components/CheckEngineLight';
import HeadTailLights from './components/HeadTailLights';
import WindShieldWipers from './components/WindshieldWipers';

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
            <Route path="/services" Component={Services}/>
            <Route path="/services/oilchange" Component={OilChange}/>
            <Route path="/services/brakes" Component={Brakes} />
            <Route path="/services/checkenginelight" Component={CheckEngineLight}/>
            <Route path="/services/headlights" Component={HeadTailLights}/>
            <Route path="/services/windshieldwipers" Component={WindShieldWipers}/>
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;