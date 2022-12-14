import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFecth";
import Button from "./Button";
import { IDay } from "./DayList";

export default function CreateWord() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const [isLoading, setIsLoading] = useState(false);
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch("http://localhost:3001/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label className="block text-lg pb-2">Eng</label>
        <input
          type="text"
          placeholder="computer"
          ref={engRef}
          className="border border-slate-700 h-10 px-3 w-full md:w-96"
        />
      </div>
      <div className="input_area">
        <label className="block text-lg py-2">Kor</label>
        <input
          type="text"
          placeholder="컴퓨터"
          ref={korRef}
          className="border border-slate-700 h-10 px-3 w-full md:w-96"
        />
      </div>
      <div className="input_area">
        <label className="block text-lg py-2">Day</label>
        <select ref={dayRef} className="border border-slate-700 h-10 px-3 w-full md:w-96">
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        className="block rounded-lg py-2 bg-blue-500 text-white font-bold text-center w-full mt-5 md:py-4 md:w-20"
        style={{ opacity: isLoading ? 0.3 : 1 }}
      >
        {isLoading ? "Saving" : "저장"}
      </button>
    </form>
  );
}
