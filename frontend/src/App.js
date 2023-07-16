import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mechanic from "./components/Mechanic";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import CreateAppointment from "./components/CreateAppointment";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanic" element={<Mechanic />} />
          <Route path="/customer/userlogin" element={<UserLogin />} />
          <Route path="/customer/createcustomer" element={<UserSignup />} />
          <Route
            path="/customer/createappointment"
            element={<CreateAppointment />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
