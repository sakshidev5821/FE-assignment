import React from "react";
import Calendar from "./component/Calender/Calender";

const App = () => {
  const specificDate = new Date();

  return (
    <div>
      <Calendar specificDate={specificDate} />
    </div>
  );
};

export default App;
