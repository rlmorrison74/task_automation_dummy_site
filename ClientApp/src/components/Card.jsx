import React, { useEffect, useState } from "react";
import "../custom.css";

export default function Card({
  data: { date, summary, temperatureC, temperatureF },
}) {
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const beautifyDate = () => {
      const arr1 = date.split("");
      const arr2 = arr1.slice(5, 10);
      setNewDate(arr2.join(""));
    };
    beautifyDate();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="weatherCard">
      <h4>{newDate}</h4>
      <div className="weatherCard-summary">
        <p>It's going to be {summary} today!</p>
      </div>
      <div className="weatherCard-temperatures">
        <p>{temperatureC} degrees Celsius</p>
        <p>{temperatureF} degrees Fahrenheit</p>
      </div>
    </div>
  );
}
