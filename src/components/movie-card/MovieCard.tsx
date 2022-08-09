import classNames from "classnames";
import React from "react";
import { IMovie } from "types/apiTmd";
import { originalImage } from "utils/generateImage";

type Props = {
  item: IMovie;
  className?: string;
};

export default function MovieCard({ item, className }: Props) {
  if (!item) {
    return null;
  }
  return (
    <div
      className={classNames(
        "bg-white p-1 rounded-box w-full transition-all hover:ring-2 ring-yellow-500",
        className
      )}
    >
      <img
        className="rounded-box"
        src={originalImage(item.poster_path)}
        alt=""
      />
      <div className="flex flex-col space-y-2 my-2 px-3">
        <div>
          <span className="px-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg mr-2">
            🥳 9.4
          </span>
          <span className="text-gray-500">5 season</span>
        </div>
        <h2 className="font-semibold">{item.title}</h2>
      </div>
    </div>
  );
}
