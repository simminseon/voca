import useFetch from "../hooks/useFecth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
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
            <h3>현재 일 수 : {days.length}일</h3>
            <button onClick={onClick}>Day 추가</button>
        </div>
    );
}
