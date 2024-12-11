import React from "react";
import "./alarm.css";
import WakeUp from "./components/wake_up/wake_up.tsx";
import SleepTime from "./components/sleep_time/sleep_time.tsx";

interface alarmProps {}

const Alarm: React.FC<alarmProps> = ({}) => {
  return (
    <div>
      <WakeUp />
      <SleepTime />
      <div id="alarmTime">Alarm Time:</div>;
    </div>
  );
};

export default Alarm;
