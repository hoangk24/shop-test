import React from "react";
import { Movie } from "types";
import { originalImage } from "utils/generateImage";

type Props = {
  movie: Movie;
  isWatched?: boolean;
};
export default function MovieCard({ movie, isWatched = false }: Props) {
  if (!movie) {
    return null;
  }
  return (
    <div className="bg-white p-2 flex items-center space-x-2 rounded-box hover:shadow-lg">
      <img
        className="block w-[18%] rounded-box"
        src={originalImage(movie.poster_path)}
        alt=""
      />
      <div className="">
        <h3 className="font-bold truncate">{movie.title}</h3>
        <p className="text-gray-500 mt-1 truncate">
          {movie.overview.substring(0, 26)}
          {movie.overview.length > 26 ? "..." : ""}
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
            ⭐️ {movie.vote_average}
          </strong>
        )}
      </div>
    </div>
  );
}
