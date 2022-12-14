import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFecth";
import { IDay } from "./DayList";

export default function DeleteDay() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const onClickDelete = (day: IDay) => {
    const selectedDay = days.filter((data) => {
      return data.id === day.id;
    });

    fetch(`http://localhost:3001/days/${day.id}`, {
      method: "DELETE",
      body: JSON.stringify({
        day: selectedDay,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("삭제 완료!");
        navigate(`/`);
      }
    });
  };

  return (
    <ul className="md:flex md:flex-wrap">
      {days.map((day) => (
        <li key={day.id} className="pb-2.5 md:pr-2.5 md:flex-[20%_0]">
          <button
            className="w-full rounded-lg py-2 bg-rose-500 text-white font-bold text-center md:py-4"
            onClick={() => onClickDelete(day)}
          >
            Day {day.day}
          </button>
        </li>
      ))}
    </ul>
  );
}
