"use client"
import React, { useEffect, useState } from 'react'
import { useMovie } from '../hooks/useMovie'
import Card from './Card'
import { getGenres, getMovies } from '../lib/api'

const CardList = () => {
  const { movies, setMovies, setGenres } = useMovie()
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies(1);
      const genres = await getGenres()
  
      setMovies(movies);
      setGenres(genres);
    };
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  }, [initialized, setGenres, setMovies])
  return (
    <div className='w-full flex justify-center flex-col items-center'>
      {movies?.map((movie) => <Card movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default CardList