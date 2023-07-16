import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const navigate = useNavigate();

  const [appointmentInput, setAppointmentInput] = useState({
    mechanic: "",
    customer: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setAppointmentInput({
      ...appointmentInput,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/appointment/createappointment`;
    console.log("appointment input", appointmentInput);
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentInput),
    });
    const data = await response.json();
    console.log("response", data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={appointmentInput.mechanic}
        name="mechanic"
        placeholder="Mechanic"
      />
      <input
        onChange={handleChange}
        value={appointmentInput.customer}
        name="customer"
        placeholder="Customer"
      />
      <input
        onChange={handleChange}
        value={appointmentInput.appointmentDate}
        name="appointmentDate"
        placeholder="Date"
      />
      <input
        onChange={handleChange}
        value={appointmentInput.appointmentTime}
        name="appointmentTime"
        placeholder="Time"
      />
      <input
        onChange={handleChange}
        value={appointmentInput.reason}
        name="reason"
        placeholder="Whats needed on the car"
      />
      <input type="submit" />
    </form>
  );
}

export default UserSignup;
