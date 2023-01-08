import React, { useState } from "react";
import useFetch from "../hooks/useFecth";

interface IProps {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

export default function Word({ word: w }: IProps) {
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
            setWords({
              ...word,
              id: 0,
            });
          }
        });
    }
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td className="h-16 border border-[#ccc] w-[10%] text-center">
        <input type="checkbox" onChange={toggleDone} checked={isDone} />
      </td>
      <td className="h-16 border border-[#ccc] w-1/4 text-center">
        {word.eng}
      </td>
      <td className="h-16 border border-[#ccc] w-1/4 text-center">
        {isShow && word.kor}
      </td>

      <td className="h-16 border border-[#ccc] w-1/4 text-center">
        <button
          onClick={toggleShow}
          className="text-white bg-[#1e90ff] rounded px-4 py-2 font-bold"
        >
          {isShow ? "숨기기" : "뜻보기"}
        </button>
        <button
          onClick={onClickDelete}
          className="text-white bg-[#b22222] rounded px-4 py-2 font-bold ml-2"
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
