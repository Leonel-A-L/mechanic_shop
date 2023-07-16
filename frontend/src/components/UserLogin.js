import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  const [customerInput, setCustomerInput] = useState({
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
    const URL = `${process.env.REACT_APP_BACKEND_URI}/customer/userlogin`;
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
        value={customerInput.email}
        name="email"
        placeholder="email"
      />
      <input
        onChange={handleChange}
        value={customerInput.phoneNumber}
        name="phoneNumber"
        placeholder="phone number"
      />
      <input type="submit" />
    </form>
  );
}

export default UserLogin;
