import React from "react";
import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import useFetch from "../hooks/useFecth";

export default function Day() {
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
  return (
    <>
      <h2 className="pb-5 text-3xl font-bold">Day {day}</h2>
      <table className="w-full">
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
