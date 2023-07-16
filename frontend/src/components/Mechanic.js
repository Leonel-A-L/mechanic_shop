import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [mechanic, setMechanic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/mechanic`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setMechanic(data);
    };

    fetchData();
  }, []);

  const display = mechanic.map((mechanic) => {
    return (
      <div key={mechanic._id}>
        <p>
          {mechanic.firstName} {mechanic.lastName}
        </p>
        <img src={mechanic.image} alt={mechanic.firstName}></img>
        <p>{mechanic.title}</p>
      </div>
    );
  });
  console.log(display);

  return (
    <div>
      <h1>Our World Class Mechanics</h1>
      {display}
    </div>
  );
}

export default Home;
