import React, { useState, useEffect } from "react";
import "moment-timezone";
import moment from "moment";

const Clock = (props) => {
  const { region, city } = props;

  const [currentDate, setCurrentDate] = useState();

  const updateTimeCallback = () => {
    setInterval(() => {
      const fullDate = moment()
        .tz(`${region}/${city}`)
        .format("dddd D MMMM YYYY HH:mm:ss");

      setCurrentDate(fullDate);
    }, 1000);
  };
  useEffect(updateTimeCallback, [region, city]);

  const getDate = (date) => {
    let splitArr = date.split(" ");
    splitArr.pop();
    return splitArr.join(" ");
  };

  const getTime = (date) => {
    const timeStr = date.split(" ").pop();
    const splittedTimeArr = timeStr.split(":");
    return {
      hour: splittedTimeArr[0],
      minutes: splittedTimeArr[1],
      seconds: splittedTimeArr[2],
    };
  };

  if(!currentDate) return <h1>Loading...</h1>

  return (
    <div className="container">
      <h1>{city}</h1>
      <div className="container__content">
        <div className="container__content__header">{getDate(currentDate)}</div>
        <div className="container__content__main">
          <ul className="time">
            <li key="hour">{getTime(currentDate).hour}</li>
            <li key="minute">{getTime(currentDate).minutes}</li>
            <li key="seconds">{getTime(currentDate).seconds}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clock;
