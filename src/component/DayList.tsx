import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFecth";
import Button from "./Button";

export interface IDay {
  day: number;
  id: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="flex flex-wrap">
      {days.map((day) => (
        <li key={day.id} className="pr-2.5 flex-[20%_0]">
          <Button to={`./day/${day.day}`} theme="blue">
            Day {day.day}
          </Button>
        </li>
      ))}
    </ul>
  );
}
