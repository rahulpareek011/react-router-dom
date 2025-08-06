import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Fetch = () => {

  const [data, setData] = useState("")
  const [toggle, setToggle] = useState(true)

  const navigate = useNavigate()


  const fetchData = async () => {
    // const result = await axios.get("https://fakestoreapi.com/products");
    // console.log(result)
    // setData(result.data)

    fetch("https://dummyjson.com/products")
      // .then(res=>{console.log(">>res",res)})
      .then(res => res.json())
      .then(result => setData(result))
  }

  const toggleEvent = () => {
    setToggle(!toggle)
    if (toggle) {
      navigate('/')
    } else {
      navigate('/header')
    }
  }

  useEffect(() => {
    fetchData()
  }, [toggle]);

  console.log(">>>>toggle", toggle)
  console.log(">>>>data", data)



  return (
    <>
      <button onClick={toggleEvent}>Change</button>
    </>
  )
}

export default Fetch
