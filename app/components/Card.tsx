"use client"
import React from "react";
import { Movie } from "../types";
import Image from "next/image";
import { useMovie } from "../hooks/useMovie";
import GenreTag from "./GenreTag";
import Star from "./icons/Star";

const Card = ({ movie } : { movie: Movie}) => {
  const { genres, setSelectedMovie, setModalOpen } = useMovie();
  const genresInfo = genres.filter((g) => movie.genre_ids.includes(g.id));

  const onClickCard = () => {
    setSelectedMovie(movie)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col w-80 md:w-[985px] min-h-96 md:min-h-64 mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 cursor-pointer" onClick={onClickCard}>
      <div className="md:hidden relative h-64">
        <Image
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            width={332}
            height={275}
            alt=""
            className="object-cover w-full max-w-full rounded-t-lg h-full md:rounded-none md:rounded-e-lg"
          />
          <div className="flex flex-row items-center gap-1 absolute float-left right-4 bottom-1">
            <div className="text-white font-bold text-2xl">{movie?.vote_average.toFixed(1)}</div>
            <div className="text-gurosPink-500">
              <Star />
            </div>
          </div>
      </div>
      <div className="flex flex-col self-start w-80 md:justify-between p-4 leading-normal gap-4 md:w-[865px]">
        <div>
          <h1 className="mb-0 text-xl font-bold tracking-tight text-gurosGray-950 line-clamp-1 md:block">{movie.title}</h1>
          <span className="text-gurosGray-500 font-normal">{movie.id}</span>
        </div>
        <div className="hidden md:block">
          <h2 className="mb-1 text-sm font-bold tracking-tight text-gurosGray-950 md:block">¿De qué trata?</h2>
          <p className="mb-20 text-base font-normal text-gurosGray-500 line-clamp-1">{movie.overview}</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-row flex-wrap justify-end">
            {genresInfo.map((genre) => (
              <GenreTag key={genre.id} name={genre.name} />
            ))}
          </div>
          <div className="hidden md:flex items-center flex-row gap-1">
            <div className="text-gurosGray-500 font-bold text-2xl">{movie.vote_average.toFixed(1)}</div>
            <div className="text-gurosPink-500">
              <Star />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:h-72 md:w-80 md:block">
        <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            width={335}
            height={275}
            alt={movie.title}
            className="object-cover w-full max-w-full rounded-t-lg h-full md:rounded-none md:rounded-e-lg"
          />
      </div>
      
    </div>
  );
};

export default Card;
