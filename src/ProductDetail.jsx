import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);

  const singleFetch = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    singleFetch()
  }, [id])

  console.log(product);

  return (
    <div>
      {product && product.map(item => (
        <div>
          <img src={item.image} alt="itemImg" />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductDetail
