import React from "react";
import { useState } from "react";
import "./calender.css";

const Calendar = ({ specificDate }) => {
  const [date, setDate] = useState(specificDate);


  const getMonthName = () => {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getDaysOfWeek = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek.map((day) => (
      <div key={day} className="calendar-cell day-of-week">
        {day}
      </div>
    ));
  };

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  };

  const getFirstDayOfWeek = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 7 : firstDay;
  };

  const renderCalendarCells = () => {
    const daysInMonth = getDaysInMonth();
    const firstDayOfWeek = getFirstDayOfWeek();
    const blanks = Array(firstDayOfWeek )
      .fill(null)
      .map((_, index) => (
        <div key={`${index}`} className="calendar-cell"></div>
      ));

    const calendarDays = Array(daysInMonth)
      .fill(null)
      .map((_, index) => {
        const day = index + 1;
        const isCurrentDay = day === date.getDate();
        const specificDate = new Date(2023, 5, day);
        return (
          <div
            onClick={() => setDate(specificDate)}
            key={`day-${day}`}
            role="button"
            className={`calendar-cell ${isCurrentDay ? "current-day" : ""}`}
          >
            {day}
          </div>
        );
      });

    return [ ...blanks, ...calendarDays ];
  };

  return (
    <div className="calendar">
      <div className="calendar_head">
        <h2>{getMonthName()}</h2>
      </div>
      <div className="calendar_grid">
        
        {getDaysOfWeek()}
        {renderCalendarCells()}
      </div>
    </div>
  );
};

export default Calendar;
