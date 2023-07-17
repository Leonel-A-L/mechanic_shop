import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Mechanics from './components/Mechanics';
import OilChange from './components/OilChange';
import Brakes from './components/Brakes';
import CheckEngineLight from './components/CheckEngineLight';
import HeadTailLights from './components/HeadTailLights';
import WindShieldWipers from './components/WindshieldWipers';
import CreateAppointment from './components/CreateAppointment';
import Archie from './components/Archie';
import Gerard from './components/Gerard';
import Abel from './components/Abel';
import Fraser from './components/Fraser';
import Reviews from './components/Reviews';
import CreateAccount from './components/CreateAccount';

function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Mechanic Shop LLC!</h1>
          <form>
            <label for="logIn" className="logInLabel">Log In:</label>
            <input type="email" placeholder="email" id="emailLogIn" name="emailLogIn"/>
            <label for="logIn"></label>
            <input type="tel" placeholder="telephone" id="telLogIn" name="telLogIn"/>
            <button type="submit" className="logInButton">Log In</button>
          </form>
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
              <Nav.Item>
                <Nav.Link as={Link} to="/mechanics" eventKey={"mechanicsPage"}>
                  Mechanics
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/createaccount" eventKey={"createAccountPage"}>
                  Create Account
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/createappointment" eventKey={"appointmentPage"}>
                  Create Appointment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/reviews" eventKey={"reviewsPage"}>
                  Reviews
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className="display">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/createappointment" Component={CreateAppointment}/>
            <Route path="/reviews" Component={Reviews}/>
            <Route path="/createaccount" Component={CreateAccount}/>
            <Route path="/mechanics" Component={Mechanics}/>
            <Route path="/mechanics/archie" Component={Archie}/>
            <Route path="/mechanics/gerard" Component={Gerard}/>
            <Route path="/mechanics/abel" Component={Abel}/>
            <Route path="/mechanics/fraser" Component={Fraser}/>
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