import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import '../custom.css'

export default function Weather() {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("weatherforecast");
      setForecasts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="weather">
      {forecasts.map((forecast, i) => (
        <Card data={forecast} key={i} />
      ))}
    </div>
  );
}
