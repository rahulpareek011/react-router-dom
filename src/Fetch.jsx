import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(true)

  const fetchData = async () => {
    try {
      const result = await axios.get('https://fakestoreapi.com/products')
      console.log(">>>> result", result)
      setData(result.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [toggle])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <button onClick={handleToggle}>Change</button>
    </div>
  )
}

export default Fetch
