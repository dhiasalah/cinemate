import React from 'react'


export const Button = ({children}) => {
  return (
    <button className="text-white w-64 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 rounded-lg mr-2 mb-2 font-medium">{children}</button>
  )
}
