"use client"
import { PropsWithChildren, createContext, useState } from "react";
import { Genre, Movie, MovieContextType } from "../types";

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

export function MovieProvider({ children }: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<Movie|null>(null);

  return (
    <MovieContext.Provider
      value={{ movies, genres, setMovies, setGenres, selectedMovie, setSelectedMovie, modalOpen,
        setModalOpen }}
    >
      {children}
    </MovieContext.Provider>
  );
}