import React from "react";
import TextField from "@mui/material/TextField";
import './sleep_time.css'

interface SleepTimeProps {}

const SleepTime: React.FC<SleepTimeProps> = ({}) => {
  const [hours, setHours] = React.useState<number>(8);
  const [minutes, setMinutes] = React.useState<number>(0);

  const changeHours = (newHours) => {
    if (6 <= newHours && newHours <= 10) {
      setHours(Math.floor(newHours));
    }
  };

  const changeMinutes = (newMinutes) => {
    if (0 <= newMinutes && newMinutes < 60) {
      setMinutes(Math.floor(newMinutes));
    }
  };

  return (
    <div id="sleepTime">
      Sleep Time:
      <div id="sleepTimeInput">
        <div></div>
        <div className="timeInput">
          Hours:
          <TextField
            label="Number"
            type="number"
            value={hours}
            onChange={(event) => changeHours(event.target.value)}
          />
        </div>
        <div className="timeInput">
          Minutes:
          <TextField
            label="Number"
            type="number"
            value={minutes}
            onChange={(event) => changeMinutes(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SleepTime;
