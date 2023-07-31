import React from 'react'

const Button = ({ name, className }) => {
  return (
    <div>
      <button
        className={'border border-black bg-blue py-2 px-7  hover:bg-red-800 hover:text-white hover:border-red-800 duration-300'}>
        {name}
      </button>
    </div>
  )
};

export default Button;
