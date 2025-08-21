import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null);
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
