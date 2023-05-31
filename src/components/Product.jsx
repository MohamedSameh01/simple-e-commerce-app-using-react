import React from 'react'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {value,showButton}=props;
    return (
        <div className='col-3 mb-3'>
            <div className="card">
                <img src={value.image} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}.</p>
                    <p>{value.price}</p>
                    {showButton ?<Link className="btn btn-primary" to={`/product/${value.id}`}>Details</Link>:null }
                </div>
            </div>
        </div>
    )
}

export default Product
