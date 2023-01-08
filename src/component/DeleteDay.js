import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFecth";

export default function DeleteDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const onClickDelete = (day) => {
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
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <button
              style={{ background: "red" }}
              onClick={() => onClickDelete(day)}
            >
              Day {day.day}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
