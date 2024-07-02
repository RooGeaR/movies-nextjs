import React from 'react'

const GenreTag = ({ name }: {name: string}) => {
  return (
    <span className="h-6 py-1 px-2.5 me-2 mb-2 text-xs font-medium text-gurosBlue-500 bg-white rounded-3xl border border-gurosBlue-500">{name}</span>
  )
}

export default GenreTag