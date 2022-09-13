import { useParams } from "react-router-dom";
import Word from "./Word";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFecth";

export default function Day() {
    const { day } = useParams();

    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`https://react-voca.herokuapp.com/words?day=${day}`)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setWords(data);
    //         });
    // }, [day]);
    const words = useFetch(`https://react-voca.herokuapp.com/words?day=${day}`);
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
