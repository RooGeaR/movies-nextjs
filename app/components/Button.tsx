import React, { ReactNode } from 'react'

type ButtonType = {
  onClick: () => void;
  children: ReactNode
}

const Button = ({ onClick, children }: ButtonType ) => {
  return (
    <button type="button" className="w-32 h-9 py-2 px-6 text-sm font-normal text-gurosBlue-500 focus:outline-none bg-white rounded-lg border border-gurosBlue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
    onClick={onClick}>
      {children}
    </button>
  )
}

export default Button