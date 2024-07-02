"use client"
import { PropsWithChildren, createContext, useState } from "react";
import { Genre, Movie, MovieContextType } from "../types";

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

export function MovieProvider({ children }: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedMovie, setSelectedMovie] = useState<Movie|null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPageMovie = () => {
    setCurrentPage(p => p + 1)
  }

  const prevPageMovie = () => {
    setCurrentPage(p => p > 1 ? p - 1 : p)
  }

  return (
    <MovieContext.Provider
      value={{ movies, genres, setMovies, setGenres, selectedMovie, setSelectedMovie, modalOpen,
        setModalOpen, currentPage, nextPageMovie, prevPageMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
}