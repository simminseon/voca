import { useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";

export default function DeleteDay() {
    const days = useFetch("https://react-voca.herokuapp.com/api/days");
    // const dayday = days.map((day) => {
    //     return day;
    // });
    // console.log(dayday);
    // const [test, setTest] = useState(days);
    // console.log(dayday);

    // useEffect(() => {
    //     setTest({ ...dayday });
    // }, [dayday]);
    // console.log(test);

    const onClickDelete = (day) => {
        const selectedDay = days.filter((data) => {
            return data.id === day.id;
        });

        fetch(`https://react-voca.herokuapp.com/api/days/${day.id}`, {
            method: "DELETE",
            body: JSON.stringify({
                day: selectedDay,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.ok) {
                    alert("삭제 완료!");
                    // setTest({ id: 0 });
                }
            });
    };

    // if (test.id === 0) {
    //     return null;
    // }

    return (
        <>
            <ul className="list_day">
                {days.map((day) => (
                    <li key={day.id}>
                        <button style={{ background: "red" }} onClick={() => onClickDelete(day)}>
                            Day {day.day}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
