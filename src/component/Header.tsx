import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold m-10">
        <Link to="/">토익 영단어(고급)</Link>
      </h1>
      <div className="absolute top-[8px] right-[40px]">
        <Button to={"/createWord"}>단어 추가</Button>
        <Button to={"/createDay"}>Day 추가</Button>
        <Button to={"/DeleteDay"}> Day 삭제</Button>
      </div>
    </div>
  );
}
