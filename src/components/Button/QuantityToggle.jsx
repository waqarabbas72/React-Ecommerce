import React from 'react'

const QuantityToggle = ({decrement , increment , amount}) => {
    return (

        <div>
            <button className="text-xl border px-3 cursor-pointer" onClick={decrement()}>-</button>
            <span className="mx-2">1</span>
            <button className="text-xl border px-3 cursor-pointer" onClick={increment()}>+</button>
        </div>

    )
}

export default QuantityToggle
