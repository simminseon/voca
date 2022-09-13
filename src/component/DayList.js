import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFecth";

export default function DayList() {
    const days = useFetch("https://react-voca.herokuapp.com/api/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <ul className="list_day">
                {days.map((day) => (
                    <li key={day.id}>
                        <Link to={`./day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
