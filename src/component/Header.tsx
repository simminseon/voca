import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <div className="m-5 md:m-10 md:relative">
      <h1 className="text-2xl font-bold md:text-4xl">
        <Link to="/">토익 영단어(고급)</Link>
      </h1>
      <div className="flex mt-3 md:block md:absolute md:top-[-2px] md:right-[0] m0:mt-0">
        <Button to={"/createWord"}>단어 추가</Button>
        <Button to={"/createDay"}>Day 추가</Button>
        <Button to={"/DeleteDay"}> Day 삭제</Button>
      </div>
    </div>
  );
}
