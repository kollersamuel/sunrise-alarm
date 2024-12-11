import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import './wake_up.css'

interface WakeUpProps {}

const WakeUp: React.FC<WakeUpProps> = ({}) => {
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [isPriorSunrise, setIsPriorSunrise] = React.useState<boolean>(true);

  const changeHours = (newHours) => {
    if (0 <= newHours && newHours <= 2) {
      setHours(Math.floor(newHours));
    }
  };

  const changeMinutes = (newMinutes) => {
    if (0 <= newMinutes && newMinutes < 60) {
      setMinutes(Math.floor(newMinutes));
    }
  };

  return (
    <div id="wakeUpAlarm">
      Alarm Time Relative to Sunrise:
      <div id="wakeUpAlarmInput">
        <div id="priorSunriseInput">
          <Select
            value={Number(isPriorSunrise)}
            onChange={(event) =>
              setIsPriorSunrise(event.target.value as unknown as boolean)
            }
          >
            <MenuItem value={1}>-</MenuItem>
            <MenuItem value={0}>+</MenuItem>
          </Select>
        </div>
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

export default WakeUp;
