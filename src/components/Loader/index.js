import React from 'react'
import './Loader.css'
function Loader() {
    return (
        <div className='load-wrapper w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
            <div className="loader"></div>
            Loading...
        </div>
    )
}

export default Loader
