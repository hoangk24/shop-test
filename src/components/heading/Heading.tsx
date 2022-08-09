import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onNext?: () => void;
  onBack?: () => void;
  isHaveNav?: boolean;
  large?: boolean;
}
export default function Heading({
  children,
  onNext,
  onBack,
  large = false,
  isHaveNav = true,
}: Props) {
  return (
    <div className="flex items-center mb-2">
      <h1
        className={classNames("flex-1 font-bold text-xl", {
          "text-3xl": large,
        })}
      >
        {children}
      </h1>
      {isHaveNav && (
        <div className="flex">
          <button onClick={onBack} type="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
          <button onClick={onNext} type="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
