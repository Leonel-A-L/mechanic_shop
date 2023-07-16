import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const navigate = useNavigate();

  const [customerInput, setCustomerInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomerInput({
      ...customerInput,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/customer/createcustomer`;
    console.log("customer input", customerInput);
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerInput),
    });
    const data = await response.json();
    console.log("response", data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={customerInput.firstName}
        name="firstName"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={customerInput.lastName}
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={customerInput.email}
        name="email"
        placeholder="E-mail"
      />
      <input
        onChange={handleChange}
        value={customerInput.phoneNumber}
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <input type="submit" />
    </form>
  );
}

export default UserSignup;
