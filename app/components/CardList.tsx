"use client"
import React, { useEffect, useState } from 'react'
import { useMovie } from '../hooks/useMovie'
import Card from './Card'
import { getGenres, getMovies } from '../lib/api'
import Pagination from './Pagination'
import { usePagination } from '../hooks/usePagination'
import { Movie } from '../types'

const CardList = () => {
  const { movies, setMovies, setGenres, currentPage, prevPageMovie, nextPageMovie } = useMovie()
  const { nextPage, previousPage, items, activePage, totalPages, resetPage } = usePagination(movies)
  const [initialized, setInitialized] = useState(false);
  
  const prevAction = () => {
    if (activePage === 1) {
      prevPageMovie()
      if (currentPage > 1) {
        resetPage()
      }
    } else {
      previousPage()
    }
  }

  const nextAction = async () => {
    if (activePage === totalPages) {
      nextPageMovie()
      resetPage()
    } else {
      nextPage()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies(currentPage);
      setMovies(movies);
    }
    fetchData()
  }, [currentPage, setMovies])

  useEffect(() => {
    const fetchData = async () => {
      //const movies = await getMovies(1);
      const genres = await getGenres()
  
      //setMovies(movies);
      setGenres(genres);
    };
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  }, [initialized, setGenres])
  return (
    <div className='w-full flex justify-center flex-col items-center'>
      {items?.map((movie) => <Card movie={movie} key={movie.id}/>)}
      <div className='w-80 md:w-[985px] flex justify-end items-end gap-2'>
        <Pagination prevAction={prevAction} nextAction={nextAction}/>
      </div>
    </div>
  )
}

export default CardList