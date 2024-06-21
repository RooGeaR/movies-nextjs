"use client"
import React from "react";
import { Movie } from "../types";
import Image from "next/image";
import { useMovie } from "../hooks/useMovie";
import GenreTag from "./GenreTag";
import Star from "./icons/Star";
import Rating from "./Rating";

const CardExpanded = ({ movie } : { movie: Movie | null}) => {
  const { genres } = useMovie();
  const genresInfo = genres.filter((g) => movie?.genre_ids.includes(g.id));
  return (
    <div className="flex flex-col md:items-center w-[375px] min-h-[874px] md:w-[1029px] md:min-h-[600px] mb-3 bg-white rounded-lg md:flex-row">
      <div className="relative h-[351px] w-[375px] md:h-[600px] md:w-80">
        <Image
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            width={375}
            height={351}
            alt=""
            className="object-cover md:object-fill w-full max-w-full rounded-t-lg h-full md:rounded-none md:rounded-e-lg"
          />
          <div className="flex flex-row items-center gap-1 absolute float-left right-4 bottom-1">
            <div className="text-white font-bold text-2xl">{movie?.vote_average.toFixed(1)}</div>
            <div className="text-gurosPink-500">
              <Star />
            </div>
          </div>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal gap-4 w-[375px] min-h-[523px] md:w-[697px]">
        <div>
          <h1 className="mb-0 text-xl font-bold tracking-tight text-gurosGray-950">{movie?.title}</h1>
          <span className="text-gurosGray-500 font-normal">{movie?.id}</span>
        </div>
        <h2 className="mb-1 text-sm font-bold tracking-tight text-gurosGray-950">¿De qué trata?</h2>
        <p className="mb-3 text-base font-normal text-gurosGray-500">{movie?.overview}</p>
        <div className="flex md:flex-row md:justify-end">
          <div className="flex flex-row flex-wrap justify-end">
            {genresInfo.map((genre) => (
              <GenreTag key={genre.id} name={genre.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:mt-28">
          <h3 className="text-sm font-bold text-gurosGray-950">Cuéntanos ¿Te gustó?</h3>
          <div className="md:mt-10">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExpanded;
