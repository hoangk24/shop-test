import React from "react";
import { IMovie } from "types/apiTmd";
import { originalImage } from "utils/generateImage";

type Props = {
  item: IMovie;
  isWatched?: boolean;
};
export default function MovieCard({ item, isWatched = false }: Props) {
  if (!item) {
    return null;
  }
  return (
    <div className="bg-white p-2 flex items-center space-x-2 rounded-box hover:shadow-lg">
      <img
        className="block w-[18%] rounded-box"
        src={originalImage(item.poster_path)}
        alt=""
      />
      <div className="">
        <h3 className="font-bold truncate">{item.title}</h3>
        <p className="text-gray-500 mt-1 truncate">
          {item.overview.substring(0, 26)}
          {item.overview.length > 26 ? "..." : ""}
        </p>
        {isWatched ? (
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            className="range mt-1"
          />
        ) : (
          <strong className="text-blue-500 font-semibold ">
            ⭐️ {item.vote_average}
          </strong>
        )}
      </div>
    </div>
  );
}
