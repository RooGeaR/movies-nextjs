import React from 'react'
import Star from './icons/Star'

const Rating = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className="flex items-center gap-3">
        <Star className='text-gurosPink-500 w-6 h-6'/>
        <Star className='text-gurosPink-500 w-6 h-6'/>
        <Star className='text-gurosPink-500 w-6 h-6'/>
        <Star className='text-gurosGray-200 w-6 h-6'/>
        <Star className='text-gurosGray-200 w-6 h-6'/>
      </div>
      <button type="button" className="text-white w-full md:w-80 bg-gurosPink-500 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-6 py-5 me-2 mb-2 focus:outline-none">Enviar calificación</button>
    </div>
  )
}

export default Rating