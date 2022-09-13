import { useState } from "react";
import useFetch from "../hooks/useFecth";

export default function Word({ word: w }) {
    // const words = useFetch(`http://localhost:3001/words`);
    const [word, setWords] = useState(w);
    console.log(word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const toggleShow = () => {
        setIsShow(!isShow);
    };
    const toggleDone = () => {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };
    console.log(word);

    const onClickDelete = () => {
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    if (res.ok) {
                        setWords({ id: 0 });
                    }
                });
        }
    };

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" onChange={() => toggleDone(word)} checked={isDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>

            <td>
                <button onClick={toggleShow}>{isShow ? "숨기기" : "뜻보기"}</button>
                <button onClick={onClickDelete} className="btn_del">
                    삭제
                </button>
            </td>
        </tr>
    );
}
