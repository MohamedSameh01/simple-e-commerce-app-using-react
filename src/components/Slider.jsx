import React from 'react'
import IMG1 from './Images/image1.jpg'
import IMG2 from './Images/image2.png'
import IMG3 from './Images/image3.png'
const Slider = () => {
    return (

        <div id="carouselExample" className="carousel slide mt-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={IMG1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider
