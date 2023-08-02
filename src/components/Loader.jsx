import React from 'react'
import LoadingGif from '../images/loader.gif'

const Loader = () => {
    return (

        <div className="flex justify-center items-center">
            <img src={LoadingGif} alt="" width={50} height={50} />
        </div>

    )
}

export default Loader
