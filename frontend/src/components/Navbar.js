import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>|<Link to="/mechanic">Our Mechanics</Link>|
      <Link to="/customer/userlogin">Log In</Link>|
      <Link to="/customer/createcustomer">Sign Up</Link>
      <Link to="/customer/createappointment">Schedule Appointment</Link>
    </div>
  );
}

export default Navbar;
