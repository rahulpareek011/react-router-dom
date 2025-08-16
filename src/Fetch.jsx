import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


const Fetch = () => {

  const [data, setData] = useState("")
  const [loading, isLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  // const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data)
      isLoading(false)
    } catch (e) {
      console.log("error>>>", e);
    }

    const searchingandSorting = data
    .filer(item=> 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    ).sort((a,b) =>{
      if(sort == lowToHigh) return a.price - b.price;
    })
    // fetch("https://dummyjson.com/products")
    //   // .then(res=>{console.log(">>res",res)})
    //   .then(res => res.json())
    //   .then(result => setData(result))
  }

  // const toggleEvent = () => {
  //   setToggle(!toggle)
  //   if (toggle) {
  //     navigate('/')
  //   } else {
  //     navigate('/header')
  //   }
  // }

  useEffect(() => {
    fetchData()
  }, []);

  console.log(data)

  return (
    <div style={{margin: "80px 0px"}}>
      {/* <button onClick={toggleEvent}>Change</button> */}
      <input style={{width: "60%",padding:"20px" , border:"none",margin:"0 30px 20px 0"}}
        type="text"
        placeholder='Search any item or category'
        value={search}
        onChange={(e)=> {setSearch(e.target.value)}}
      />

      <select style={{padding:"10px"}} value={sort} onChange={(e) =>{setSort(e.target.value)}}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="ascen">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      {loading ? <p>data is loading...</p> :

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {data.map((item) => (
            <div style={{ border: "2px solid black", padding: "20px", width: "410px", boxSizing: "border-box", }}>
              <img src={item.image} style={{ height: "150px" }} />
              <p><b>Title: </b>{item.title}</p>
              <p><b>Description: </b>{item.description}</p>
              <p><b>Category: </b>{item.category}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Fetch
