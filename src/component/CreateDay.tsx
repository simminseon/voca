import React from "react";
import useFetch from "../hooks/useFecth";
import { useNavigate } from "react-router-dom";
import { IDay } from "./DayList";

export default function CreateDay() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const onClick = () => {
    fetch("http://localhost:3001/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.");
        navigate(`/`);
      }
    });
    console.log(days);
  };

  return (
    <div>
      <h3 className="text-lg font-bold">현재 일 수 : <span className="text-blue-500">{days.length}</span>일</h3>
      <button className="block rounded-lg py-2 bg-blue-500 text-white font-bold text-center w-full mt-5 md:py-4 md:w-20" onClick={onClick}>Day 추가</button>
    </div>
  );
}
