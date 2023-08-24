"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

function ScheduleCalendar({ handleModalOpen }) {
  const [value, onChange] = useState(new Date());

  const updateLocale = require("dayjs/plugin/updateLocale");

  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    weekdays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  });

  return (
    <StyledCalender
      onClickDay={(prev) => handleModalOpen(!prev)}
      onChange={onChange}
      value={value}
      formatDay={(value, date) => dayjs(date).format("D")}
    ></StyledCalender>
  );
}

export default ScheduleCalendar;

const StyledCalender = styled(Calendar)`
  .react-calendar {
  }

  abbr[title] {
    text-decoration: none;
    color: #aaaaaa;
  }

  .react-calendar__tile--now {
    width: 50px;
    height: 50px;
    background-color: #6956e5;
    border-radius: 10px;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #eceafe;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #eceafe;
    color: #6956e5;
    font-weight: 700;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #181818;
  }

  .react-calendar__month-view__weekdays {
    color: #000;
    font-size: 12px;
    font-weight: 500;
  }

  .react-calendar__tile--active {
    background: #eceafe;
    color: #000;
    border-radius: 10px;
  }
`;

// .react-calendar__month-view__weekdays__weekday {
//   padding: 2em;
// }

// .react-calendar__tile {
//   padding: 2em;
// }
