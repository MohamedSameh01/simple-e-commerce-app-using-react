
import React, { useEffect, useState } from 'react'
import Product from './Product'

const ProductsList = () => {
    const api_url = 'https://fakestoreapi.com/products';
    let [products, setProducts] = useState([]);
    let [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }
    const getProductsByCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    return (
        <>
            <h1 className='text-center my-5'>Our Products</h1>
            <div className='container'>
                <button onClick={() => {
                    getProducts()
                }} className='btn btn-info my-3 mx-2'>All products</button>
                {categories.map((cat) => {
                    return (
                        <button onClick={() => {
                            getProductsByCategory(cat)
                        }} key={cat} className='btn btn-info my-3 mx-2'>{cat}</button>
                    )
                })}
                <div className='row'>
                    {products.map((product) => {
                        return (
                            <Product value={product} key={product.id} showButton={true} />
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default ProductsList
