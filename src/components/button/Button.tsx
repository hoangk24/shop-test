import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}
export default function Button({
  children,
  onClick,
  className,
  icon,
  type = "button",
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames("btn", className)}
    >
      {icon}
      {children}
    </button>
  );
}
