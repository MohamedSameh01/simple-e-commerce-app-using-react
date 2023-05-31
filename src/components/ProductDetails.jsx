import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';

const ProductDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((data) => setDetails(data));
  }, [])
  return (
    <>
      <Product value={details} showButton={false}/>
    </>
  )
}

export default ProductDetails
