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
    <ul className="flex flex-wrap">
      {days.map((day) => (
        <li key={day.id} className="pr-2.5 flex-[20%_0]">
          <button
            className="w-full rounded-lg py-4 bg-rose-500 text-white font-bold text-center"
            onClick={() => onClickDelete(day)}
          >
            Day {day.day}
          </button>
        </li>
      ))}
    </ul>
  );
}
