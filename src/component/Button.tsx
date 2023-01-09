import { Link } from "react-router-dom";
import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  to: string;
  theme?: string;
};

export default function Button({ children, to, theme }: Props) {
  if (theme === "blue") {
    return (
      <Link to={to} className="block rounded-lg py-2 bg-blue-500 text-white font-bold text-center md:py-4">
        {children}
      </Link>
    );
  } else {
    return (
      <Link
        to={to}
        className="flex-1 inline-block border border-[#222] rounded mx-1 p-1.5 bg-[#efefef] text-sm font-bold text-center md:ml-2.5 md:p-2.5 md:text-base"
      >
        {children}
      </Link>
    );
  }
}
