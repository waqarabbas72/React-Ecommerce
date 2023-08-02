import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button
        className={'border border-black bg-blue py-2 px-7  hover:bg-rose-800 hover:text-white duration-300'}>
        {name}
      </button>
    </div>
  )
};

export default Button;
