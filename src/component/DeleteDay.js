import { useState } from "react";
import useFetch from "../hooks/useFecth";

export default function DeleteDay() {
    const days = useFetch("http://localhost:3001/days");
    // const [day, setDay] = useState(days);
    const onClickDelete = (e) => {
        fetch(`http://localhost:3001/days/day${e.id}`, {
            method: "DELETE",
        });
        console.log(days);
    };

    // if (day.id === 0) {
    //     return null;
    // }
    // console.log(day);
    // console.log(days);
    return (
        <>
            <ul className="list_day">
                {days.map((day) => (
                    <li key={day.id}>
                        <button onClick={() => onClickDelete(day)}>Day {day.day}</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
