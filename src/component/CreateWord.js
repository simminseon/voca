import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFecth";

export default function CreateWord() {
    const days = useFetch("https://react-voca.herokuapp.com/days");
    const [isLoading, setIsLoading] = useState(false);
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch("https://react-voca.herokuapp.com/words", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    if (res.ok) {
                        alert("생성이 완료 되었습니다.");
                        navigate(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
                });
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input type="text" placeholder="computer" ref={engRef} />
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input type="text" placeholder="컴퓨터" ref={korRef} />
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map((day) => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </div>
                <button style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? "Saving" : "저장"}</button>
            </form>
        </>
    );
}
