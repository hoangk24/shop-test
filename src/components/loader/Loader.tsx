import classNames from "classnames";
import React from "react";
import "./Loader.css";

type Props = {
  className?: string;
};
export default function Loader({ className }: Props) {
  return (
    <div
      className={classNames(
        "bg-base-200 flex items-center flex-col justify-center",
        className
      )}
    >
      <div className="pulsing-3" />
      <span className="font-bold text-2xl">...Loading</span>
    </div>
  );
}
