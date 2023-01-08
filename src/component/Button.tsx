import { Link } from "react-router-dom";
import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  // children?: string;
  to: string;
  theme?: string;
};

export default function Button({ children, to, theme }: Props) {
  if (theme === "blue") {
    return (
      <Link
        to={to}
        className="block rounded-lg py-4 bg-blue-500 text-white font-bold text-center"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <Link
        to={to}
        className="border border-[#222] rounded ml-2.5 p-2.5 bg-[#efefef] font-bold"
      >
        {children}
      </Link>
    );
  }
}
