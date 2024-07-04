"use client"
import React, { useEffect, useState } from 'react'
import { useMovie } from '../hooks/useMovie'
import Card from './Card'
import { getGenres, getMovies } from '../lib/api'
import Pagination from './Pagination'
import { usePagination } from '../hooks/usePagination'
import Spinner from './Spinner'

const CardList = () => {
  const { movies, setMovies, setGenres, currentPage, prevPageMovie, nextPageMovie } = useMovie()
  const { nextPage, previousPage, items, activePage, totalPages, resetPage } = usePagination(movies)
  const [initialized, setInitialized] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  
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
      setIsLoading(false)
    }
    fetchData()
  }, [currentPage, setMovies])

  useEffect(() => {
    const fetchData = async () => {
      const genres = await getGenres()
      setGenres(genres);
    };
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  }, [initialized, setGenres])

  if (isLoading) {
    return <Spinner />
  }

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