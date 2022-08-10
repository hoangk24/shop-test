import classNames from "classnames";
import { useState } from "react";
import { Movie } from "types";
import { formatDate } from "utils/date";
import { originalImage } from "utils/generateImage";

type Props = {
  movie: Movie;
  className?: string;
};

export default function MovieCard({ movie, className }: Props) {
  const [loaded, setLoaded] = useState(false);
  if (!movie) {
    return null;
  }
  return (
    <div
      className={classNames(
        "bg-white group p-1 rounded-box w-full transition-all hover:scale-[1.01] hover:ring-2 ring-yellow-500",
        className
      )}
    >
      <div className="rounded-box overflow-hidden relative">
        <img
          className={classNames({ hidden: !loaded })}
          onLoad={() => setLoaded(true)}
          src={originalImage(movie.poster_path)}
          alt=""
        />
        {!loaded && (
          <div className="animate-pulse">
            <div className="flex justify-center items-center w-full h-60 bg-gray-300 rounded ">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        )}
        <span className="absolute top-2 left-2 bg-yellow-500 px-2 rounded-lg">
          {movie.original_language}
        </span>
      </div>
      <div className="flex flex-col space-y-2 my-2 px-3">
        <div>
          <span className="px-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg mr-2">
            🥳 {movie.vote_average}
          </span>
          <span className="text-gray-500">5 season</span>
        </div>
        <h2 className="font-semibold truncate group-hover:text-yellow-500">
          {movie.title}
        </h2>
        <p className="truncate">{movie.overview}</p>
        <strong className="">{formatDate(movie.release_date)}</strong>
      </div>
    </div>
  );
}
